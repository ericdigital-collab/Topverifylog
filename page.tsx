export default function Home() {
  return (
    <main style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
        <div style={{ color: '#38bdf8', fontSize: '1.5rem', fontWeight: 'bold' }}>Top Verify</div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="#login" style={{ background: '#334155', color: '#fff', padding: '8px 15px', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem' }}>Login</a>
          <a href="#register" style={{ background: '#38bdf8', color: '#0f172a', padding: '8px 15px', textDecoration: 'none', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold' }}>Register</a>
        </div>
      </header>

      {/* REGISTRATION SECTION */}
      <div style={{ maxWidth: '600px', margin: '20px auto', background: '#1e293b', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', textAlign: 'left' }} id="register">
        <h2 style={{ color: '#38bdf8', marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '5px' }}>Create Account</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8', fontSize: '0.9rem' }}>Username</label>
            <input type="text" placeholder="Enter your username" required style={{ width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8', fontSize: '0.9rem' }}>Email Address</label>
            <input type="email" placeholder="Enter your email" required style={{ width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8', fontSize: '0.9rem' }}>Password</label>
            <input type="password" placeholder="Create a password" required style={{ width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff' }} />
          </div>
          <button type="submit" style={{ background: '#38bdf8', color: '#0f172a', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Register & Get Started</button>
        </form>
      </div>

      {/* LOGIN SECTION */}
      <div style={{ maxWidth: '600px', margin: '30px auto', background: '#1e293b', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', textAlign: 'left' }} id="login">
        <h2 style={{ color: '#38bdf8', marginBottom: '15px', borderBottom: '1px solid #334155', paddingBottom: '5px' }}>Account Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8', fontSize: '0.9rem' }}>Email or Username</label>
            <input type="text" placeholder="Enter your email or username" required style={{ width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8', fontSize: '0.9rem' }}>Password</label>
            <input type="password" placeholder="Enter your password" required style={{ width: '100%', padding: '12px', background: '#0f172a', border: '1px solid #334155', borderRadius: '6px', color: '#fff' }} />
          </div>
          <button type="submit" style={{ background: '#38bdf8', color: '#0f172a', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Log In to Dashboard</button>
        </form>
      </div>
    </main>
  );
}

