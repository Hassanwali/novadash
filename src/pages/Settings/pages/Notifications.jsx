import { useState } from 'react'

const notificationItems = [
  { label: 'Email Digest', desc: 'Receive a daily summary of activity in your workspace.', defaultOn: true },
  { label: 'Task Assigned', desc: 'Notify when a task is assigned to you.', defaultOn: true },
  { label: 'Task Completed', desc: 'Notify when a task you own is marked complete.', defaultOn: false },
  { label: 'Project Updates', desc: "Receive updates on projects you're a member of.", defaultOn: true },
  { label: 'Invoice Paid', desc: 'Notify when a client pays an invoice.', defaultOn: true },
  { label: 'Weekly Report', desc: 'Get a weekly performance report every Monday morning.', defaultOn: true },
  { label: 'Mentions', desc: 'Notify when someone mentions you in a comment.', defaultOn: true },
]

function Toggle({ on, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        width: '44px', height: '24px', borderRadius: '12px',
        backgroundColor: on ? '#3b82f6' : '#e2e8f0',
        cursor: 'pointer', position: 'relative', transition: 'background-color 0.2s', flexShrink: 0
      }}
    >
      <div style={{
        width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#ffffff',
        position: 'absolute', top: '3px', left: on ? '23px' : '3px', transition: 'left 0.2s'
      }} />
    </div>
  )
}

function Notifications() {
  const [toggles, setToggles] = useState(
    notificationItems.reduce((acc, item) => ({ ...acc, [item.label]: item.defaultOn }), {})
  )

  const handleToggle = (label) => {
    setToggles(prev => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Notification Preferences</h2>
      <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 24px 0' }}>Choose how and when you want to be notified</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {notificationItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid #f1f5f9' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', margin: '0' }}>{item.label}</p>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>{item.desc}</p>
            </div>
            <Toggle on={toggles[item.label]} onToggle={() => handleToggle(item.label)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications