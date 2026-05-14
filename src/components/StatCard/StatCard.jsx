import styles from './StatCard.module.css'

function StatCard({ title, value, change, changeLabel, icon, iconBg }) {
  const isPositive = change && change.startsWith('+')
  const isNeutral = change === '0%'

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <p className={styles.title}>{title}</p>
        <div className={styles.iconWrapper} style={{ backgroundColor: iconBg }}>
          {icon}
        </div>
      </div>

      <p className={styles.value}>{value}</p>

      <div className={styles.bottomRow}>
        <span className={
          isNeutral ? styles.changeNeutral :
          isPositive ? styles.changePositive :
          styles.changeNegative
        }>
          {isNeutral ? '—' : isPositive ? '▲' : '▼'} {change}
        </span>
        <span className={styles.changeLabel}>{changeLabel}</span>
      </div>
    </div>
  )
}

export default StatCard