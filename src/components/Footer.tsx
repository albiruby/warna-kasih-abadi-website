import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"
import { COLORS } from "../data/colors"
import { FAMILIES } from "../data/families"
import { PRODUCTS, productHref } from "../data/products"
import { Link } from "../lib/router"
import { SITE } from "../lib/site"
import { ColorBand } from "./ColorBand"

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-line bg-white p-1">
              <img src="/logo-wka-mark.png" alt="" width={40} height={40} className="h-full w-full object-contain" />
            </span>
            <div>
              <div className="font-display text-base font-bold leading-tight text-ink">
                Warna Kasih Abadi
              </div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                PT / Bogor / Sejak 2020
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-[34ch] text-[13px] leading-relaxed text-ink-soft">
            Produsen cat tembok di Bogor. Tiga lini produk, {COLORS.length} kode warna,
            dan lembar data teknis untuk setiap produk.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${SITE.instagramHandle}`}
              className="btn btn-quiet h-11 w-11 p-0"
            >
              <InstagramLogo size={18} aria-hidden />
            </a>
            <a
              href={`https://wa.me/${SITE.phoneIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Warna Kasih Abadi"
              className="btn btn-quiet h-11 w-11 p-0"
            >
              <WhatsappLogo size={18} aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2 className="meta">Produk</h2>
          <ul className="mt-3 space-y-1">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link
                  href={productHref(product)}
                  className="flex min-h-11 items-center text-[13px] text-ink-soft transition-colors hover:text-accent"
                >
                  {product.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/katalog"
                className="flex min-h-11 items-center text-[13px] text-ink-soft transition-colors hover:text-accent"
              >
                Katalog warna
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="meta">Unduhan</h2>
          <ul className="mt-3 space-y-1">
            {FAMILIES.map((family) => (
              <li key={family.id}>
                <a
                  href={family.pdf}
                  download
                  className="flex min-h-11 items-center text-[13px] text-ink-soft transition-colors hover:text-accent"
                >
                  TDS {family.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="meta">Kontak</h2>
          <ul className="mt-3 space-y-1 text-[13px] text-ink-soft">
            <li>
              <a className="flex min-h-11 items-center hover:text-accent" href={`tel:+${SITE.phoneIntl}`}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="flex min-h-11 items-center hover:text-accent" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center">Bogor, Jawa Barat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page flex flex-col gap-2 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PT Warna Kasih Abadi. Semua hak cipta dilindungi.</p>
          <p>Bogor, Indonesia</p>
        </div>
      </div>
      <ColorBand colors={COLORS.slice(0, 40).map((color) => color.hex)} height="h-1.5" />
    </footer>
  )
}
