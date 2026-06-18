function Account() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 24px 0' }}>Account</h2>

      {[
        { label: 'Workspace Name', value: 'NovaDash Workspace' },
        { label: 'Workspace URL', value: 'app.novadash.io/workspace/acme' },
        { label: 'Timezone', value: 'UTC-8 (Pacific Time)' },
        { label: 'Language', value: 'English (US)' },
      ].map((field, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: '500', color: '#374151', display: 'block', marginBottom: '6px' }}>{field.label}</label>
          <input defaultValue={field.value} style={{ width: '100%', padding: '10px 14px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
        </div>
      ))}

      <button style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
        Save Changes
      </button>
    </div>
  )
}

export default Account