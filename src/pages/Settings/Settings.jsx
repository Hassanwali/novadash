import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Settings.module.css'

const settingsNav = [
  { label: 'Profile', icon: '👤', path: '/settings' },
  { label: 'Account', icon: '🌐', path: '/settings/account' },
  { label: 'Password & Security', icon: '🔒', path: '/settings/security' },
  { label: 'Notifications', icon: '🔔', path: '/settings/notifications' },
  { label: 'Integrations', icon: '⚙️', path: '/settings/integrations' },
  { label: 'Billing & Plans', icon: '💳', path: '/settings/billing' },
  { label: 'Team & Permissions', icon: '👥', path: '/settings/team' },
]

function Settings() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Navbar />
        <div className={styles.mainContent}>
          <div className={styles.innerNav}>
            {settingsNav.map((item, index) => (
              <div
                key={index}
                className={`${styles.navItem} ${location.pathname === item.path ? styles.navItemActive : ''}`}
                onClick={() => navigate(item.path)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings