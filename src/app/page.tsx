import Criteria from '@/components/criteria'
import FAQs from '@/components/faq'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import Price from '@/components/price'
import Rules from '@/components/rules'
import Sponsor from '@/components/sponsor'
import Timeline from '@/components/timeline'
import Image from 'next/image'
import Policy from '../components/policy'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto ">
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <FAQs />
      <Timeline />
      <Price />
      <Sponsor />
      <Policy />
      <Footer />
    </main>
  )
}
