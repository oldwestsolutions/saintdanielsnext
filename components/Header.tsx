import Image from 'next/image'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo.svg" 
            alt="Saint Daniels" 
            width={40} 
            height={40}
            priority
          />
          <span className={styles.logoText}>SAINT DANIELS</span>
        </div>
        <div className={styles.navAuth}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header 