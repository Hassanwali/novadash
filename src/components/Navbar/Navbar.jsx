import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>

      <div className={styles.leftSection}>
        <h1 className={styles.pageTitle}>Dashboard</h1>
        <p className={styles.pageSubtitle}>Welcome back, Sarah 👋</p>
      </div>

      <div className={styles.rightSection}>

        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.notificationBtn}>
          🔔
          <div className={styles.notificationBadge}>8</div>
        </div>

        <div className={styles.userSection}>
          <div className={styles.userAvatar}>S</div>
          <div>
            <p className={styles.userName}>Sarah Miller</p>
            <p className={styles.userRole}>Admin</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar