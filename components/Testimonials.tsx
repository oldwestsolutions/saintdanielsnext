import Image from 'next/image'
import styles from '../styles/Testimonials.Module.css'
import { TestimonialProps } from '../types'

const Testimonials = () => {
  const testimonial: TestimonialProps = {
    quote: "Saint Daniels has transformed how I think about healthcare. The rewards make every health decision more meaningful.",
    name: "Elizabeth Windsor",
    title: "Member since 2023",
    since: "2023",
    avatar: "/images/elizabeth-avatar.jpg"
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>{testimonial.quote}</p>
          <div className={styles.author}>
            <div className={styles.avatarWrapper}>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={60}
                height={60}
                className={styles.avatar}
              />
            </div>
            <div className={styles.authorInfo}>
              <h4>{testimonial.name}</h4>
              <p className={styles.since}>Member since {testimonial.since}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 