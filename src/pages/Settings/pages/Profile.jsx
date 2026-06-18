function Profile() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Profile Settings</h2>
      <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0' }}>Manage your personal information and preferences</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>S</div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '24px', height: '24px', backgroundColor: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', border: '2px solid #ffffff' }}>📷</div>
        </div>
        <div>
          <p style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0' }}>Sarah Miller</p>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 8px 0' }}>sarah@novadash.io · Admin</p>
          <button style={{ padding: '6px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#ffffff', fontSize: '13px', cursor: 'pointer' }}>Change Photo</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {[
          { label: 'First Name', value: 'Sarah' },
          { label: 'Last Name', value: 'Miller' },
          { label: 'Email Address', value: 'sarah@novadash.io' },
          { label: 'Job Title', value: 'Product Manager' },
          { label: 'Department', value: 'Product' },
          { label: 'Phone Number', value: '+1 (555) 012-3456' },
        ].map((field, index) => (
          <div key={index}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>{field.label}</label>
            <input defaultValue={field.value} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>Bio</label>
        <textarea rows={3} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
      </div>

      <button style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
        Save Changes
      </button>
    </div>
  )
}

export default Profile