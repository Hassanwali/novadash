const integrations = [
  { initials: 'GH', name: 'GitHub', desc: 'Connect repositories and automate deployments.', color: '#24292e', bg: '#f1f5f9', connected: true },
  { initials: 'SL', name: 'Slack', desc: 'Get real-time notifications in your Slack workspace.', color: '#4a154b', bg: '#fdf4ff', connected: true },
  { initials: 'FG', name: 'Figma', desc: 'Sync design files and attach to projects directly.', color: '#f24e1e', bg: '#fff4f2', connected: false },
  { initials: 'ST', name: 'Stripe', desc: 'Automatically sync invoices and payment events.', color: '#635bff', bg: '#f5f3ff', connected: true },
  { initials: 'GD', name: 'Google Drive', desc: 'Attach documents and share files with your team.', color: '#1a73e8', bg: '#eff6ff', connected: false },
  { initials: 'JR', name: 'Jira', desc: 'Import and sync tasks from Jira boards.', color: '#0052cc', bg: '#eff6ff', connected: false },
]

function Integrations() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Integrations</h2>
      <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0' }}>Connect your favorite tools and services to NovaDash</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {integrations.map((item, index) => (
          <div key={index} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: item.color }}>
                  {item.initials}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0' }}>{item.name}</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0' }}>{item.desc}</p>
                </div>
              </div>
              {item.connected && (
                <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>● Connected</span>
              )}
            </div>
            <button style={{
              padding: '7px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              border: item.connected ? '1px solid #fecaca' : '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: item.connected ? '#ef4444' : '#64748b'
            }}>
              {item.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Integrations