import { LangProvider } from '@/lib/context'
import LangWrapper from '@/components/LangWrapper'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Challenges from '@/components/Challenges'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Comparison from '@/components/Comparison'
import Trust from '@/components/Trust'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <LangProvider>
      <LangWrapper>
        <Navbar />
        <main>
          <Hero />
          <Challenges />
          <Solution />
          <Features />
          <Comparison />
          <Trust />
          <FinalCTA />
        </main>
        <Footer />
        <Modal />
      </LangWrapper>
    </LangProvider>
  )
}
