import Image from 'next/image'
import styles from '@/styles/RoyalBenefits.Module.css'
import { BenefitProps } from '@/types'

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.iconWrapper}>
        <Image 
          src={icon} 
          alt={title} 
          width={48} 
          height={48}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const RoyalBenefits = () => {
  const benefits: BenefitProps[] = [
    {
      icon: '/images/treasure-icon.png',
      title: 'Premium Rewards',
      description: 'Unlock exclusive healthcare services, products, and experiences with your earned points.'
    },
    {
      icon: '/images/crown-icon.png',
      title: 'Royal Treatment',
      description: 'Priority scheduling, personalized care plans, and VIP healthcare experiences await you.'
    },
    {
      icon: '/images/hearts-icon.png',
      title: 'Wellness Incentives',
      description: 'Earn rewards for maintaining your health and wellness goals. Our program encourages and celebrates your commitment to a healthier lifestyle.'
    }
  ]

  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>ROYAL BENEFITS</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoyalBenefits 