import Image from 'next/image'
import styles from '../styles/Header.Module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/logo.svg" 
              alt="Saint Daniels Logo" 
              width={40} 
              height={40}
              priority
            />
          </div>
          <span className={styles.logoText}>SAINT DANIELS</span>
        </div>
        <nav className={styles.nav}>
          <button className={styles.loginBtn}>Login</button>
        </nav>
      </div>
    </header>
  )
}

export default Header 