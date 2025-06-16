import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import InfoGrid from '@/components/InfoGrid'
import FeaturedContent from '@/components/FeaturedContent'
import NewsBlogSection from '@/components/NewsBlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <header>
        <HeroSlider />
      </header>
      <main className="info-grid">
        <InfoGrid />
      </main>
      <FeaturedContent />
      <NewsBlogSection />
      <Footer />
    </>
  )
}