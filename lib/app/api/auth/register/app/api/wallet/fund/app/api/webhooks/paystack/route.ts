import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get('x-paystack-signature');

    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY || '')
      .update(body)
      .digest('hex');

    if (hash !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(body);

    if (event.event === 'charge.success') {
      const { reference, amount, customer } = event.data;
      const amountInNaira = amount / 100;

      await pool.query(
        `UPDATE users SET wallet_balance = wallet_balance + $1 WHERE email = $2`,
        [amountInNaira, customer.email]
      );

      await pool.query(
        `INSERT INTO transactions (user_id, amount, type, reference, description, status)
         SELECT id, $1, 'credit', $2, 'Paystack Wallet Top-up', 'successful'
         FROM users WHERE email = $3`,
        [amountInNaira, reference, customer.email]
      );
    }

    return NextResponse.json({ status: 'success' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
