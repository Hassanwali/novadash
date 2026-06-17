import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Invoices.module.css'

const stats = [
  { title: 'Total Invoiced', value: '$127,450', sub: '10 invoices', icon: '💲', iconBg: '#eff6ff' },
  { title: 'Paid', value: '$89,000', sub: '7 invoices', icon: '✅', iconBg: '#f0fdf4' },
  { title: 'Pending', value: '$12,400', sub: '1 invoices', icon: '⏰', iconBg: '#fffbeb' },
  { title: 'Overdue', value: '$26,050', sub: '2 invoices', icon: '⚠️', iconBg: '#fff1f2' },
]

const filterTabs = ['All', 'Paid', 'Pending', 'Overdue']

const invoices = [
  { id: 'INV-042', client: 'Bridgewave Inc.', initials: 'BI', color: '#3b82f6', project: 'Nova Backend v2', amount: '$12,400', issued: 'Mar 1', due: 'Mar 15', status: 'Pending', statusColor: '#f59e0b', statusBg: '#fffbeb' },
  { id: 'INV-041', client: 'Hexagon Media', initials: 'HM', color: '#8b5cf6', project: 'Mobile App Redesign', amount: '$8,750', issued: 'Feb 20', due: 'Mar 5', status: 'Overdue', statusColor: '#ef4444', statusBg: '#fff1f2' },
  { id: 'INV-040', client: 'Veloce Group', initials: 'VG', color: '#22c55e', project: 'E-Commerce Platform', amount: '$21,500', issued: 'Feb 15', due: 'Mar 1', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-039', client: 'Orion Fintech', initials: 'OF', color: '#f59e0b', project: 'Analytics Dashboard', amount: '$6,200', issued: 'Feb 10', due: 'Feb 25', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-038', client: 'Apex Solutions', initials: 'AS', color: '#ef4444', project: 'Security Audit', amount: '$14,800', issued: 'Feb 3', due: 'Feb 17', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-037', client: 'Luminary Labs', initials: 'LL', color: '#06b6d4', project: 'Client Portal v3', amount: '$9,900', issued: 'Jan 25', due: 'Feb 8', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-036', client: 'Stackfield AI', initials: 'SA', color: '#6366f1', project: 'Data Pipeline', amount: '$17,300', issued: 'Jan 15', due: 'Jan 30', status: 'Overdue', statusColor: '#ef4444', statusBg: '#fff1f2' },
  { id: 'INV-035', client: 'Bridgewave Inc.', initials: 'BI', color: '#3b82f6', project: 'Consulting Retainer', amount: '$5,000', issued: 'Jan 10', due: 'Jan 25', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-034', client: 'Hexagon Media', initials: 'HM', color: '#8b5cf6', project: 'Landing Page Redesign', amount: '$3,600', issued: 'Jan 5', due: 'Jan 20', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
  { id: 'INV-033', client: 'Veloce Group', initials: 'VG', color: '#22c55e', project: 'iOS App', amount: '$28,000', issued: 'Dec 20', due: 'Jan 5', status: 'Paid', statusColor: '#22c55e', statusBg: '#f0fdf4' },
]

function Invoices() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? invoices
    : invoices.filter(inv => inv.status === activeTab)

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Navbar />
        <div style={{ padding: '24px' }}>

          <div className={styles.statsRow}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statTop}>
                  <p className={styles.statTitle}>{stat.title}</p>
                  <div className={styles.statIcon} style={{ backgroundColor: stat.iconBg }}>
                    {stat.icon}
                  </div>
                </div>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statSub}>{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.filterBar}>
            <div className={styles.filterTabs}>
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
                <input type="text" placeholder="Search invoices..." className={styles.searchInput} />
              </div>
              <button className={styles.filterBtn}>⚙ Filter</button>
              <button className={styles.exportBtn}>⬇ Export</button>
              <button className={styles.newInvoiceBtn}>+ New Invoice</button>
            </div>
          </div>

          <div className={styles.tableCard}>
            <table className={styles.table}>
              <thead className={styles.tableHead}>
                <tr>
                  <th>INVOICE</th>
                  <th>CLIENT</th>
                  <th>PROJECT</th>
                  <th>AMOUNT</th>
                  <th>ISSUED</th>
                  <th>DUE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {filtered.map((invoice, index) => (
                  <tr key={index}>
                    <td className={styles.invoiceId}>{invoice.id}</td>
                    <td>
                      <div className={styles.clientCell}>
                        <div className={styles.clientAvatar} style={{ backgroundColor: invoice.color }}>
                          {invoice.initials}
                        </div>
                        {invoice.client}
                      </div>
                    </td>
                    <td>{invoice.project}</td>
                    <td className={styles.amount}>{invoice.amount}</td>
                    <td>{invoice.issued}</td>
                    <td className={invoice.status === 'Overdue' ? styles.dueDateOverdue : ''}>
                      {invoice.due}
                    </td>
                    <td>
                      <span
                        className={styles.statusBadge}
                        style={{ color: invoice.statusColor, backgroundColor: invoice.statusBg }}
                      >
                        {invoice.status === 'Paid' ? '✓' : invoice.status === 'Pending' ? '⏰' : '⚠'} {invoice.status}
                      </span>
                    </td>
                    <td>···</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <span className={styles.paginationInfo}>Showing {filtered.length} of {invoices.length} invoices</span>
              <div className={styles.paginationButtons}>
                <button className={styles.pageBtn}>← Prev</button>
                <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
                <button className={styles.pageBtn}>2</button>
                <button className={styles.pageBtn}>3</button>
                <button className={styles.pageBtn}>Next →</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Invoices