const usageItems = [
  { label: 'Team Members', used: 48, total: 50, color: '#f59e0b' },
  { label: 'Active Projects', used: 24, total: 100, color: '#3b82f6' },
  { label: 'Storage', used: 18, total: 50, color: '#8b5cf6', unit: 'GB' },
]

function Billing() {
  return (
    <div>
      <div style={{ backgroundColor: '#0f172a', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8', backgroundColor: '#1e293b', padding: '4px 10px', borderRadius: '6px' }}>PRO PLAN</span>
            <div style={{ marginTop: '12px' }}>
              <span style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff' }}>$79</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>/month</span>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '8px 0' }}>Up to 50 team members · Unlimited projects · Priority support</p>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0' }}>✓ Next billing date: <strong style={{ color: '#ffffff' }}>Apr 1, 2026</strong></p>
          </div>
          <button style={{ padding: '10px 20px', backgroundColor: '#ffffff', color: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Upgrade to Enterprise
          </button>
        </div>
      </div>

      <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px 0' }}>Plan Usage</h3>
        {usageItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '13px', color: '#64748b' }}>{item.label}</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>{item.used}{item.unit || ''} / {item.total}{item.unit || ''}</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(item.used / item.total) * 100}%`, height: '100%', backgroundColor: item.color, borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0' }}>Payment Method</h3>
          <span style={{ fontSize: '13px', color: '#3b82f6', cursor: 'pointer' }}>+ Add card</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#1e3a5f', color: '#ffffff', padding: '6px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '700' }}>VISA</div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', margin: '0' }}>Visa ending in 4242</p>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0' }}>Expires 12/28</p>
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: '600' }}>● Default</span>
        </div>
      </div>
    </div>
  )
}

export default Billing