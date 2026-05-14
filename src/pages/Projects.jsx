import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

const projects = [
  { name: 'Nova Backend v2', desc: 'API integration, database migrations, and microservice architecture overhaul.', color: '#3b82f6', status: 'Active', statusColor: '#22c55e', tasks: '31/40', progress: 78, members: 3, due: 'Mar 15' },
  { name: 'Mobile App Redesign', desc: 'Complete UI/UX overhaul for iOS and Android, new design system rollout.', color: '#8b5cf6', status: 'Active', statusColor: '#22c55e', tasks: '18/40', progress: 45, members: 4, due: 'Apr 2' },
  { name: 'E-Commerce Platform', desc: 'Payment gateway integration, checkout flow, and inventory management.', color: '#22c55e', status: 'Active', statusColor: '#22c55e', tasks: '46/50', progress: 92, members: 3, due: 'Mar 8' },
  { name: 'Analytics Dashboard', desc: 'Real-time data visualization, custom reports, and KPI tracking for clients.', color: '#f59e0b', status: 'Active', statusColor: '#22c55e', tasks: '10/30', progress: 33, members: 2, due: 'Apr 28' },
  { name: 'Security Audit & Hardening', desc: 'Penetration testing, vulnerability assessment, and compliance documentation.', color: '#ef4444', status: 'Review', statusColor: '#f59e0b', tasks: '24/40', progress: 60, members: 2, due: 'Mar 20' },
  { name: 'Client Portal v3', desc: 'Self-service portal for clients to view reports, invoices, and project status.', color: '#06b6d4', status: 'Completed', statusColor: '#3b82f6', tasks: '35/35', progress: 100, members: 3, due: 'Feb 14' },
]

const tabs = ['All', 'Active', 'Review', 'Completed', 'Archived']

const stats = [
  { icon: '📊', value: '24', label: 'Total Projects' },
  { icon: '📈', value: '4', label: 'Active' },
  { icon: '✅', value: '164', label: 'Tasks Done' },
  { icon: '👥', value: '12', label: 'Team Members' },
]

function Projects() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.status === activeTab)

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Navbar />
        <div style={{ padding: '24px' }}>

          <div className={styles.filterBar}>
            <div className={styles.filterTabs}>
              {tabs.map((tab, index) => (
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
              <button className={styles.newProjectBtn}>+ New Project</button>
            </div>
          </div>

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

          <div className={styles.projectsGrid}>
            {filtered.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects