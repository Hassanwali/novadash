import styles from './Sidebar.module.css'

const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Projects' },
  { label: 'Tasks' },
  { label: 'Team' },
  { label: 'Messages', badge: 11 },
  { label: 'Analytics' },
  { label: 'Invoices', badge: 2 },
]

function Sidebar() {
  return (
    <div className={styles.sidebar}>

      <div className={styles.logo}>
        <div className={styles.logoIcon}>⚡</div>
        <span className={styles.logoText}>NovaDash</span>
      </div>

      <p className={styles.menuLabel}>MAIN MENU</p>

      <div className={styles.navLinks}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
          >
            <span>{item.label}</span>
            {item.badge && (
              <span className={styles.navBadge}>{item.badge}</span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.navItem}>
          <span>Settings</span>
        </div>
        <div className={`${styles.navItem} ${styles.signOut}`}>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>
          S
          <div className={styles.onlineDot} />
        </div>
        <div>
          <p className={styles.userName}>Sarah Miller</p>
          <p className={styles.userRole}>Admin</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar