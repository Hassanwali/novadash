import { useNavigate, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tasks', path: '/tasks' },
  { label: 'Team', path: '/team' },
  { label: 'Messages', path: '/messages', badge: 11 },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Invoices', path: '/invoices', badge: 2 },
  { label: 'Settings', path: '/settings' },
]

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

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
            className={`${styles.navItem} ${location.pathname === item.path ? styles.navItemActive : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span>{item.label}</span>
            {item.badge && (
              <span className={styles.navBadge}>{item.badge}</span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <div className={`${styles.navItem} ${styles.signOut}`} onClick={() => navigate('/') }>
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