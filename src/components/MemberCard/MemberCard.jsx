import styles from './MemberCard.module.css'

const roleColors = {
  Admin: { color: '#8b5cf6', bg: '#f5f3ff' },
  Member: { color: '#3b82f6', bg: '#eff6ff' },
  Viewer: { color: '#64748b', bg: '#f1f5f9' },
}

const statusColors = {
  Online: '#22c55e',
  Offline: '#94a3b8',
  Away: '#f59e0b',
}

function MemberCard({ name, role, dept, badge, projects, tasksDone, status, avatarColor }) {
  const roleStyle = roleColors[badge] || roleColors.Member
  const statusColor = statusColors[status] || statusColors.Offline

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.memberInfo}>
          <div className={styles.avatarWrapper}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: avatarColor || '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              {name.charAt(0)}
            </div>
            <div className={styles.statusDot} style={{ backgroundColor: statusColor }} />
          </div>
          <div>
            <p className={styles.memberName}>{name}</p>
            <p className={styles.memberRole}>{role}</p>
          </div>
        </div>
        <span className={styles.menuIcon}>···</span>
      </div>

      <div className={styles.tags}>
        <span className={styles.deptTag}>{dept}</span>
        <span
          className={styles.roleTag}
          style={{ color: roleStyle.color, backgroundColor: roleStyle.bg }}
        >
          ✦ {badge}
        </span>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statBox}>
          <p className={styles.statValue}>{projects}</p>
          <p className={styles.statLabel}>Projects</p>
        </div>
        <div className={styles.statBox}>
          <p className={styles.statValue}>{tasksDone}</p>
          <p className={styles.statLabel}>Tasks Done</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.onlineStatus}>
          <div className={styles.onlineDot} style={{ backgroundColor: statusColor }} />
          {status}
        </div>
        <button className={styles.messageBtn}>
          ✉ Message
        </button>
      </div>
    </div>
  )
}

export default MemberCard