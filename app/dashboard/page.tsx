'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('user_email');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleFundWallet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number(amount) < 100) {
      alert('Minimum top-up amount is ₦100');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/wallet/fund', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, amount: Number(amount) }),
      });

      const data = await res.json();
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        alert(data.error || 'Unable to initiate payment');
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.logo}>Topverifylog</h1>
        <p style={styles.userInfo}>{email ? email : 'User Dashboard'}</p>
      </div>

      <div style={styles.grid}>
        {/* Balance Card */}
        <div style={styles.card}>
          <h3>Wallet Balance</h3>
          <h2 style={styles.balance}>₦0.00</h2>
        </div>

        {/* Top-up Form */}
        <div style={styles.card}>
          <h3>Fund Wallet</h3>
          <form onSubmit={handleFundWallet} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="number"
              placeholder="Amount in Naira (e.g. 1000)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? 'Processing...' : 'Pay with Paystack'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { minHeight: '100vh', backgroundColor: '#0f172a', color: '#fff', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '15px' },
  logo: { margin: 0, fontSize: '24px', color: '#38bdf8' },
  userInfo: { margin: 0, color: '#94a3b8' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  card: { padding: '20px', borderRadius: '10px', backgroundColor: '#1e293b', border: '1px solid #334155' },
  balance: { fontSize: '32px', color: '#4ade80', margin: '10px 0 0 0' },
  input: { width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', fontSize: '14px', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', borderRadius: '6px', border: 'none', backgroundColor: '#22c55e', color: '#fff', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
};
