"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import AboutUs from '@/pages/AboutUs'
import ContactUs from '@/pages/ContactUs'
import FAQ from '@/pages/FAQ'
import Features from '@/pages/Features'
import Overview from '@/pages/Overview'
import Referral from '@/pages/Referral'
import Roadmap from '@/pages/Roadmap'
import SubscribeNewsLetter from '@/pages/SubscribeNews'
import Tokenomics from '@/pages/Tokenomics'
import WhiteList from '@/pages/WhiteList'

export default function Home() {
  return (
    <>
      <Header />
      <Overview />
      <AboutUs />
      <WhiteList />
      <Referral />
      <Features />
      <Tokenomics />
      <Roadmap />
      <SubscribeNewsLetter />
      <ContactUs />
      <FAQ />
      <Footer />
    </>
  )
}