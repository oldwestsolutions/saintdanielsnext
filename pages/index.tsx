import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RoyalBenefits from '../components/RoyalBenefits'
import Testimonials from '../components/Testimonials'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saint Daniels - Royal Healthcare</title>
        <meta name="description" content="Saint Daniels - Royal Healthcare Rewards Program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <RoyalBenefits />
        <Testimonials />
      </main>
    </>
  )
} 