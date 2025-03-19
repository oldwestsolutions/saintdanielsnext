import Image from 'next/image'
import styles from '@/styles/Hero.Module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero-image.jpg"
            alt="Royal figure"
            width={600}
            height={400}
            priority
            className={styles.image}
          />
        </div>
        <div className={styles.heroContent}>
          <h1>ROYAL <br />HEALTHCARE</h1>
          <p>
            Earn points with every healthcare decision and redeem 
            them for exclusive rewards. Experience healthcare fit 
            for royalty with Saint Daniels.
          </p>
          <button className={styles.joinBtn}>JOIN THE KINGDOM</button>
        </div>
      </div>
    </section>
  )
}

export default Hero 