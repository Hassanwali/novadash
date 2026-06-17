import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Analytics.module.css'

const timeTabs = ['7d', '30d', '3m', '6m', '12m', 'YTD']

const revenueData = [
  { month: 'Jan', revenue: 45000, target: 40000, expenses: 28000 },
  { month: 'Feb', revenue: 52000, target: 45000, expenses: 29000 },
  { month: 'Mar', revenue: 48000, target: 48000, expenses: 30000 },
  { month: 'Apr', revenue: 58000, target: 52000, expenses: 31000 },
  { month: 'May', revenue: 62000, target: 55000, expenses: 30000 },
  { month: 'Jun', revenue: 65000, target: 58000, expenses: 32000 },
  { month: 'Jul', revenue: 70000, target: 62000, expenses: 33000 },
  { month: 'Aug', revenue: 75000, target: 66000, expenses: 34000 },
  { month: 'Sep', revenue: 78000, target: 70000, expenses: 35000 },
  { month: 'Oct', revenue: 82000, target: 74000, expenses: 36000 },
  { month: 'Nov', revenue: 88000, target: 78000, expenses: 37000 },
  { month: 'Dec', revenue: 94280, target: 82000, expenses: 38000 },
]

const weeklyData = [
  { day: 'Mon', tasks: 15, hours: 32 },
  { day: 'Tue', tasks: 22, hours: 45 },
  { day: 'Wed', tasks: 18, hours: 48 },
  { day: 'Thu', tasks: 25, hours: 42 },
  { day: 'Fri', tasks: 20, hours: 50 },
  { day: 'Sat', tasks: 8, hours: 20 },
  { day: 'Sun', tasks: 5, hours: 12 },
]

const completionData = [
  { name: 'Nova Backend', tasks: '31/40', progress: 78, color: '#3b82f6' },
  { name: 'Mobile App', tasks: '18/40', progress: 45, color: '#f59e0b' },
  { name: 'E-Commerce', tasks: '46/50', progress: 92, color: '#22c55e' },
  { name: 'Analytics', tasks: '10/30', progress: 33, color: '#ef4444' },
  { name: 'Security', tasks: '24/40', progress: 60, color: '#3b82f6' },
  { name: 'Client Portal', tasks: '35/35', progress: 100, color: '#22c55e' },
]

const trafficData = [
  { name: 'Direct', value: 38, color: '#3b82f6' },
  { name: 'Organic', value: 28, color: '#8b5cf6' },
  { name: 'Referral', value: 19, color: '#f59e0b' },
  { name: 'Social', value: 15, color: '#22c55e' },
]

const stats = [
  { title: 'Total Revenue', value: '$94,280', change: '+12.4%', positive: true, icon: '💲', iconBg: '#eff6ff' },
  { title: 'Active Users', value: '2,847', change: '+8.1%', positive: true, icon: '👥', iconBg: '#f5f3ff' },
  { title: 'Goal Completion', value: '87%', change: '+3.2%', positive: true, icon: '🎯', iconBg: '#f0fdf4' },
  { title: 'Avg Response Time', value: '1.4s', change: '-0.3%', positive: false, icon: '⚡', iconBg: '#fff7ed' },
]

function Analytics() {
  const [activeTab, setActiveTab] = useState('7d')

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Navbar />
        <div style={{ padding: '24px' }}>

          <div className={styles.timeFilterBar}>
            <div className={styles.timeTabs}>
              {timeTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.timeTab} ${activeTab === tab ? styles.timeTabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.filterRight}>
              <button className={styles.customRangeBtn}>📅 Custom Range</button>
              <button className={styles.exportBtn}>⬇ Export</button>
            </div>
          </div>

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
                <div className={styles.statChange}>
                  <span className={stat.positive ? styles.positive : styles.negative}>
                    {stat.positive ? '▲' : '▼'} {stat.change}
                  </span>
                  <span className={styles.changeLabel}>vs last period</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <div>
                <p className={styles.chartTitle}>Revenue Overview</p>
                <p className={styles.chartSubtitle}>Revenue vs Target vs Expenses — 2025</p>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: '#3b82f6' }} />
                  Revenue
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: '#8b5cf6' }} />
                  Target
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: '#ef4444' }} />
                  Expenses
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={revenueData}>
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="target" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.bottomGrid}>
            <div className={styles.chartCard} style={{ marginBottom: 0 }}>
              <p className={styles.chartTitle}>Project Completion Rates</p>
              <p className={styles.chartSubtitle}>Tasks done vs total per project</p>
              <div className={styles.completionList}>
                {completionData.map((item, index) => (
                  <div key={index} className={styles.completionItem}>
                    <div className={styles.completionHeader}>
                      <span className={styles.completionName}>{item.name}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <span className={styles.completionMeta}>{item.tasks}</span>
                        <span className={styles.completionPercent} style={{ color: item.color }}>· {item.progress}%</span>
                      </div>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${item.progress}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.chartCard} style={{ marginBottom: 0 }}>
              <p className={styles.chartTitle}>Traffic Sources</p>
              <p className={styles.chartSubtitle}>Where users come from</p>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={trafficData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" strokeWidth={0}>
                      {trafficData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>2,847</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Users</p>
                </div>
              </div>
              <div className={styles.trafficLegend}>
                {trafficData.map((item, index) => (
                  <div key={index} className={styles.trafficItem}>
                    <div className={styles.trafficLeft}>
                      <div className={styles.trafficDot} style={{ backgroundColor: item.color }} />
                      {item.name}
                    </div>
                    <span className={styles.trafficPercent}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <div>
                <p className={styles.chartTitle}>Weekly Team Performance</p>
                <p className={styles.chartSubtitle}>Tasks completed & hours logged this week</p>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: '#3b82f6' }} />
                  Tasks
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: '#8b5cf6' }} />
                  Hours
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="tasks" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Analytics