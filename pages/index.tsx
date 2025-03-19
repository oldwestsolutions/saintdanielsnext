import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamic imports to prevent hydration errors
const Header = dynamic(() => import('../components/Header'), {
  ssr: true
})

const Hero = dynamic(() => import('../components/Hero'), {
  ssr: true
})

const RoyalBenefits = dynamic(() => import('../components/RoyalBenefits'), {
  ssr: true
})

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  ssr: true
})

// Import styles
import styles from '../styles/Home.Module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Saint Daniels - Royal Healthcare</title>
        <meta name="description" content="Saint Daniels - Royal Healthcare Rewards Program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Hero />
          <RoyalBenefits />
          <Testimonials />
        </main>
      </div>
    </>
  )
}

export default Home 