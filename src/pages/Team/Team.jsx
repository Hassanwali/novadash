import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import MemberCard from '../../components/MemberCard/MemberCard'
import styles from './Team.module.css'

const stats = [
  { icon: '👥', value: '48', label: 'Total Members' },
  { icon: '🟢', value: '31', label: 'Online Now' },
  { icon: '🏢', value: '6', label: 'Departments' },
  { icon: '🛡', value: '3', label: 'Admins' },
]

const filterTabs = ['All', 'Engineering', 'Design', 'Product', 'Marketing']

const members = [
  { name: 'Sarah Miller', role: 'Product Manager', dept: 'Product', badge: 'Admin', projects: 8, tasksDone: 142, status: 'Online', avatarColor: '#3b82f6' },
  { name: 'Alex Chen', role: 'Senior Engineer', dept: 'Engineering', badge: 'Member', projects: 5, tasksDone: 89, status: 'Online', avatarColor: '#8b5cf6' },
  { name: 'Marcus Johnson', role: 'Backend Lead', dept: 'Engineering', badge: 'Member', projects: 4, tasksDone: 76, status: 'Away', avatarColor: '#f59e0b' },
  { name: 'Priya Nair', role: 'UI/UX Designer', dept: 'Design', badge: 'Member', projects: 6, tasksDone: 114, status: 'Online', avatarColor: '#ec4899' },
  { name: 'Jake Williams', role: 'QA Engineer', dept: 'Engineering', badge: 'Member', projects: 3, tasksDone: 58, status: 'Offline', avatarColor: '#22c55e' },
  { name: 'Maria Santos', role: 'Growth Marketer', dept: 'Marketing', badge: 'Viewer', projects: 2, tasksDone: 31, status: 'Online', avatarColor: '#ef4444' },
]

function Team() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? members
    : members.filter(m => m.dept === activeTab)

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Navbar />
        <div style={{ padding: '24px' }}>

          <div className={styles.statsRow}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statBox}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.filterBar}>
            <div className={styles.filterLeft}>
              {filterTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.filterTab} ${activeTab === tab ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.filterRight}>
              <div className={styles.searchBar}>
                <span>🔍</span>
                <input
                  type="text"
                  placeholder="Search members..."
                  className={styles.searchInput}
                />
              </div>
              <button className={styles.inviteBtn}>+ Invite Member</button>
            </div>
          </div>

          <div className={styles.membersGrid}>
            {filtered.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team