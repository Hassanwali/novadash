import styles from './ProjectCard.module.css'

function ProjectCard({ name, desc, color, status, statusColor, tasks, progress, members, due }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.colorDot} style={{ backgroundColor: color }} />
        <span className={styles.status} style={{ color: statusColor }}>{status}</span>
      </div>

      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDesc}>{desc}</p>

      <div className={styles.progressRow}>
        <span className={styles.tasks}>{tasks} tasks</span>
        <span className={styles.percent}>{progress}%</span>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%`, backgroundColor: color }} />
      </div>

      <div className={styles.cardBottom}>
        <span className={styles.members}>👥 {members} members</span>
        <span className={styles.due}>📅 {due}</span>
      </div>
    </div>
  )
}

export default ProjectCard