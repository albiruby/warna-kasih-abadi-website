import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import ColorCatalog from "./components/ColorCatalog"
import WhyUs from "./components/WhyUs"
import VisionMission from "./components/VisionMission"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import DealerLocator from "./components/DealerLocator"
import Footer from "./components/Footer"
import ProductDetail, { PRODUCT_DETAILS } from "./components/ProductDetail"

export default function App() {
  const productPath = window.location.pathname.replace(/\/+$/, "")
  const productDetail = PRODUCT_DETAILS[productPath]

  if (productDetail) {
    return (
      <div className="min-h-full bg-white">
        <Navbar />
        <ProductDetail product={productDetail} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-full bg-white">
      <Navbar />
      <Hero />
      <Products />
      <ColorCatalog />
      <WhyUs />
      <VisionMission />
      <Projects />
      <Testimonials />
      <DealerLocator />
      <Footer />
    </div>
  )
}
