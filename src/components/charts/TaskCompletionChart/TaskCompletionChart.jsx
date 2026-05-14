import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import styles from './TaskCompletionChart.module.css'

const data = [
  { name: 'Completed', value: 63, color: '#3b82f6' },
  { name: 'In Progress', value: 22, color: '#8b5cf6' },
  { name: 'Review', value: 10, color: '#f59e0b' },
  { name: 'Blocked', value: 5, color: '#ef4444' },
]

function TaskCompletionChart() {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Task Completion</p>
      <p className={styles.subtitle}>Distribution by status — this month</p>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className={styles.centerLabel}>
          <p className={styles.centerValue}>63%</p>
          <p className={styles.centerText}>Done</p>
        </div>
      </div>

      <div className={styles.legend}>
        {data.map((item, index) => (
          <div key={index} className={styles.legendItem}>
            <div className={styles.legendLeft}>
              <div className={styles.legendDot} style={{ backgroundColor: item.color }} />
              <span className={styles.legendLabel}>{item.name}</span>
            </div>
            <span className={styles.legendValue}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskCompletionChart