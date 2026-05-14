import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.css'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>⚡</div>
          <span className={styles.logoText}>NovaDash</span>
        </div>

        <div className={styles.headline}>
          <span className={styles.badge}>• Trusted by 2,400+ teams worldwide</span>
          <h1 className={styles.headlineWhite}>The project platform</h1>
          <h1 className={styles.headlineBlue}>built for speed</h1>
          <p className={styles.subtext}>
            Manage projects, track tasks, and align your team — all from one clean, fast workspace.
          </p>
        </div>

        <div className={styles.features}>
          {[
            'Real-time project tracking & collaboration',
            'Advanced analytics and team insights',
            'Integrated invoicing and billing',
            'Seamless team communication hub'
          ].map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>

        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            "NovaDash cut our project coordination time in half. The analytics alone are worth it."
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.testimonialAvatar}>M</div>
            <div>
              <p className={styles.testimonialName}>Marcus Johnson</p>
              <p className={styles.testimonialRole}>CTO, Bridgewave Inc.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formTitle}>Welcome back</h1>
          <p className={styles.formSubtitle}>Sign in to your workspace to continue</p>

          <div className={styles.infoBox}>
            <span className={styles.infoIcon}>ℹ</span>
            <div>
              <p className={styles.infoTitle}>Demo credentials pre-filled</p>
              <p className={styles.infoCredentials}>sarah@novadash.io · password</p>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email address</label>
            <input
              type="email"
              defaultValue="sarah@novadash.io"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroupSecond}>
            <div className={styles.inputHeader}>
              <label className={styles.label}>Password</label>
              <span className={styles.forgotPassword}>Forgot password?</span>
            </div>
            <input
              type="password"
              defaultValue="password"
              className={styles.input}
            />
          </div>

          <div className={styles.checkboxRow}>
            <input type="checkbox" defaultChecked id="remember" />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Keep me signed in
            </label>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className={styles.signInButton}>
            Sign in to NovaDash →
          </button>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>or</span>
            <div className={styles.dividerLine} />
          </div>

          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>G  Google</button>
            <button className={styles.socialButton}>⌥  GitHub</button>
          </div>

          <p className={styles.bottomText}>
            Don't have an account?{' '}
            <span className={styles.requestAccess}>Request access</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage