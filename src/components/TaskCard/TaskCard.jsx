import styles from './TaskCard.module.css'

const priorityColors = {
  High: { color: '#f59e0b', bg: '#fffbeb' },
  Medium: { color: '#f59e0b', bg: '#fffbeb' },
  Low: { color: '#94a3b8', bg: '#f8fafc' },
  Critical: { color: '#ef4444', bg: '#fff1f2' },
}

const tagColors = {
  Design: { color: '#8b5cf6', bg: '#f5f3ff' },
  Engineering: { color: '#3b82f6', bg: '#eff6ff' },
  DevOps: { color: '#22c55e', bg: '#f0fdf4' },
  QA: { color: '#f59e0b', bg: '#fffbeb' },
  Docs: { color: '#06b6d4', bg: '#ecfeff' },
  Content: { color: '#ec4899', bg: '#fdf2f8' },
  Security: { color: '#ef4444', bg: '#fff1f2' },
}

function TaskCard({ priority, title, desc, tag, avatar, due, comments, attachments }) {
  const priorityStyle = priorityColors[priority] || priorityColors.Medium
  const tagStyle = tagColors[tag] || tagColors.Engineering

  return (
    <div className={styles.card}>

      <div className={styles.priorityBadge} style={{ color: priorityStyle.color }}>
        <div className={styles.priorityDot} style={{ backgroundColor: priorityStyle.color }} />
        {priority}
      </div>

      <p className={styles.taskTitle}>{title}</p>

      {desc && <p className={styles.taskDesc}>{desc}</p>}

      {tag && (
        <span
          className={styles.tag}
          style={{ color: tagStyle.color, backgroundColor: tagStyle.bg }}
        >
          🏷 {tag}
        </span>
      )}

      <div className={styles.cardFooter}>
        <div className={styles.footerLeft}>
          <div className={styles.avatar}>{avatar}</div>
          <span className={styles.due}>📅 {due}</span>
        </div>
        <div className={styles.footerRight}>
          {comments && <span className={styles.meta}>💬 {comments}</span>}
          {attachments && <span className={styles.meta}>📎 {attachments}</span>}
        </div>
      </div>

    </div>
  )
}

export default TaskCard