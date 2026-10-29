import About from "../components/About"
import BrandSpotlight from "../components/BrandSpotlight"
import CatalogBand from "../components/CatalogBand"
import Contact from "../components/Contact"
import Facts from "../components/Facts"
import Hero from "../components/Hero"
import Products from "../components/Products"
import PromoBand from "../components/PromoBand"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <main id="konten">
      <Hero />
      <Facts />
      <Products />
      <CatalogBand />
      <PromoBand />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <BrandSpotlight />
    </main>
  )
}
