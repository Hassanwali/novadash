import styles from './ActiveProjects.module.css'

const projects = [
  {
    name: 'Nova Backend v2',
    desc: 'API integration and database migrations',
    color: '#3b82f6',
    priority: 'High',
    priorityColor: '#ef4444',
    priorityBg: '#fff1f2',
    tasks: '31/40',
    progress: 78,
    members: 4,
    due: 'Mar 15'
  },
  {
    name: 'Mobile App Redesign',
    desc: 'Complete UI/UX overhaul for iOS and Android',
    color: '#8b5cf6',
    priority: 'Medium',
    priorityColor: '#f59e0b',
    priorityBg: '#fffbeb',
    tasks: '18/40',
    progress: 45,
    members: 6,
    due: 'Apr 2'
  },
  {
    name: 'E-Commerce Platform',
    desc: 'Payment gateway and checkout flow',
    color: '#22c55e',
    priority: 'Critical',
    priorityColor: '#ef4444',
    priorityBg: '#fff1f2',
    tasks: '46/50',
    progress: 92,
    members: 3,
    due: 'Mar 8'
  },
  {
    name: 'Analytics Dashboard',
    desc: 'Real-time data visualization for clients',
    color: '#f59e0b',
    priority: 'Low',
    priorityColor: '#64748b',
    priorityBg: '#f8fafc',
    tasks: '10/30',
    progress: 33,
    members: 5,
    due: 'Apr 28'
  },
]

function ActiveProjects() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.title}>Active Projects</p>
          <p className={styles.subtitle}>4 ongoing projects</p>
        </div>
        <span className={styles.viewAll}>View all →</span>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectTop}>
              <div className={styles.colorBar} style={{ backgroundColor: project.color }} />
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <p className={styles.projectName}>{project.name}</p>
                  <span
                    className={styles.priorityBadge}
                    style={{ color: project.priorityColor, backgroundColor: project.priorityBg }}
                  >
                    {project.priority}
                  </span>
                </div>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
            </div>

            <div className={styles.progressRow}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                />
              </div>
              <span className={styles.progressPercent}>{project.progress}%</span>
            </div>

            <div className={styles.projectMeta}>
              <span className={styles.projectTasks}>👥 {project.members} members · {project.tasks} tasks</span>
              <span className={styles.projectDue}>Due {project.due}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActiveProjects