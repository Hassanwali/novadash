import styles from './RecentActivity.module.css'

const activities = [
  { name: 'Alex Chen', initials: 'AC', color: '#8b5cf6', action: 'completed task', link: 'API Integration v2', tag: 'Nova Backend', time: '5m ago', status: '✅' },
  { name: 'Maria Santos', initials: 'MS', color: '#ec4899', action: 'created project', link: 'Mobile App Redesign', tag: 'Design System', time: '23m ago', status: '⭕' },
  { name: 'Jake Williams', initials: 'JW', color: '#f59e0b', action: 'flagged as blocked', link: 'Payment Gateway', tag: 'E-Commerce v3', time: '1h ago', status: '🟠' },
  { name: 'Priya Nair', initials: 'PN', color: '#22c55e', action: 'moved to review', link: 'Dashboard Analytics', tag: 'NovaDash', time: '2h ago', status: '🟡' },
  { name: 'Tom Eriksson', initials: 'TE', color: '#ef4444', action: 'updated deadline', link: 'Security Audit', tag: 'Infrastructure', time: '3h ago', status: '⭕' },
]

function RecentActivity() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.title}>Recent Activity</p>
        <span className={styles.viewAll}>View all →</span>
      </div>

      <div className={styles.activityList}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityItem}>
            <div className={styles.activityLeft}>
              <div className={styles.avatar} style={{ backgroundColor: activity.color }}>
                {activity.initials}
              </div>
              <div className={styles.activityContent}>
                <p className={styles.activityText}>
                  <span className={styles.activityName}>{activity.name}</span>
                  {' '}{activity.action}{' '}
                  <span className={styles.activityLink}>{activity.link}</span>
                </p>
                <div className={styles.activityMeta}>
                  <span className={styles.activityTag}>{activity.tag}</span>
                  <span className={styles.activityTime}>· {activity.time}</span>
                </div>
              </div>
            </div>
            <span className={styles.statusIcon}>{activity.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity