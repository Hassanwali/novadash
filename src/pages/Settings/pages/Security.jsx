function Security() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Password & Security</h2>
      <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0' }}>Keep your account secure</p>

      {[
        { label: 'Current Password', placeholder: '••••••••' },
        { label: 'New Password', placeholder: '••••••••' },
        { label: 'Confirm New Password', placeholder: '••••••••' },
      ].map((field, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>{field.label}</label>
          <input type="password" placeholder={field.placeholder} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
        </div>
      ))}

      <button style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginBottom: '32px' }}>
        Update Password
      </button>

      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0' }}>Two-Factor Authentication</h3>
      <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#16a34a', margin: '0' }}>2FA is enabled</p>
          <p style={{ fontSize: '13px', color: '#86efac', margin: '4px 0 0 0' }}>Authenticator app · Added Jan 15</p>
        </div>
        <span style={{ color: '#22c55e', fontSize: '20px' }}>✓</span>
      </div>
    </div>
  )
}

export default Security