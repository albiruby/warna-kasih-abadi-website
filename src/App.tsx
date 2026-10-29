import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Catalog from "./pages/Catalog"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"
import { productBySlug } from "./data/products"
import { usePathname } from "./lib/router"

export default function App() {
  const pathname = usePathname()

  const product =
    pathname.startsWith("/produk/") ? productBySlug(pathname.replace("/produk/", "")) : undefined

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Warna Kasih Abadi, produsen cat tembok Bogor",
      "/katalog": "Katalog warna, Warna Kasih Abadi",
    }
    if (product) document.title = `${product.name} ${product.suffix}, Warna Kasih Abadi`
    else document.title = titles[pathname] ?? "Halaman tidak ditemukan, Warna Kasih Abadi"
  }, [pathname, product])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <div className="flex-1">
        {pathname === "/" && <Home />}
        {pathname === "/katalog" && <Catalog />}
        {product && <ProductDetail product={product} />}
        {!product && pathname !== "/" && pathname !== "/katalog" && <NotFound path={pathname} />}
      </div>
      <Footer />
    </div>
  )
}
