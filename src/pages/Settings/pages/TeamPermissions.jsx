function TeamPermissions() {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0' }}>Team & Permissions</h2>
      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
        <p style={{ fontSize: '14px', color: '#64748b', margin: '0', lineHeight: '1.6' }}>
          Manage team roles, invite links, and access controls from this panel. Navigate to the{' '}
          <span style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: '500' }}>Team</span>
          {' '}page for member management.
        </p>
      </div>
    </div>
  )
}

export default TeamPermissions