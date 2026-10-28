import { useState, useEffect } from "react"
import logoImg from "../imports/WhatsApp_Image_2026-08-26_at_11.35.28.jpeg"

const NAV_LINKS = [
  { label: "Beranda", href: "#hero" },
  { label: "Produk", href: "#products" },
  { label: "Katalog Warna", href: "#colors" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHomePage = window.location.pathname === "/"
  const homeHref = (hash: string) => (isHomePage ? hash : `/${hash}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24">
        {/* Logo — enlarged */}
        <a
          href={homeHref("#hero")}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src={logoImg}
            alt="WKA Brand"
            className="h-20 w-auto object-contain"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase"></div>
            <div className="text-sm font-bold text-[#0D1B54]">WKA BRAND</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={homeHref(link.href)}
              className="text-sm font-semibold text-gray-600 hover:text-[#EA580C] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={homeHref("#contact")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#dd231a] to-[#ee2e25] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
        >
          Dapatkan Penawaran
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={homeHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-orange-50 hover:text-[#EA580C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={homeHref("#contact")}
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3.5 bg-gradient-to-r from-[#dd231a] to-[#ee2e25] text-white font-bold rounded-full text-sm"
              >
                Dapatkan Penawaran
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
