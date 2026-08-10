import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, amount } = await req.json();

    if (!email || !amount) {
      return NextResponse.json({ error: 'Email and amount are required' }, { status: 400 });
    }

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
      }),
    });

    const data = await response.json();

    if (!data.status) {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    return NextResponse.json({ authorization_url: data.data.authorization_url, reference: data.data.reference });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
