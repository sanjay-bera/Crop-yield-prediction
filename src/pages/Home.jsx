import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx"
import Features from "../components/Features.jsx"
import Stats from "../components/Stats.jsx"
import Testimonials from "../components/Testimonials.jsx"
import CTA from "../components/CTA.jsx"
import Footer from "../components/Footer.jsx"

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Home


