import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './ProjectActivityChart.module.css'

const data2025 = [
  { month: 'Jan', value: 35 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 50 },
  { month: 'Apr', value: 45 },
  { month: 'May', value: 55 },
  { month: 'Jun', value: 52 },
  { month: 'Jul', value: 65 },
  { month: 'Aug', value: 70 },
  { month: 'Sep', value: 75 },
  { month: 'Oct', value: 80 },
  { month: 'Nov', value: 85 },
  { month: 'Dec', value: 92 },
]

const data2024 = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 28 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 30 },
  { month: 'May', value: 40 },
  { month: 'Jun', value: 38 },
  { month: 'Jul', value: 50 },
  { month: 'Aug', value: 55 },
  { month: 'Sep', value: 60 },
  { month: 'Oct', value: 58 },
  { month: 'Nov', value: 65 },
  { month: 'Dec', value: 70 },
]

function ProjectActivityChart() {
  const [activeYear, setActiveYear] = useState('2025')

  const data = activeYear === '2025' ? data2025 : data2024

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.title}>Project Activity</p>
          <p className={styles.subtitle}>Monthly completed vs in-progress tasks</p>
        </div>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleBtn} ${activeYear === '2025' ? styles.toggleActive : styles.toggleInactive}`}
            onClick={() => setActiveYear('2025')}
          >
            2025
          </button>
          <button
            className={`${styles.toggleBtn} ${activeYear === '2024' ? styles.toggleActive : styles.toggleInactive}`}
            onClick={() => setActiveYear('2024')}
          >
            2024
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProjectActivityChart