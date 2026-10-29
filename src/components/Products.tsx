import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react"
import { COLORS } from "../data/colors"
import { PRODUCTS, productHref } from "../data/products"
import { Link } from "../lib/router"

export default function Products() {
  return (
    <section id="produk" className="py-16 lg:py-24">
      <div className="page">
        <div className="max-w-2xl">
          <h2 className="text-h2 font-semibold text-ink">Tiga lini produk.</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Setiap lini punya peran yang berbeda: penutup dinding, cat serbaguna, dan
            pelapis kedap air. Semua lembar data teknis tersedia untuk diunduh.
          </p>
        </div>

        <ul className="mt-10 border-t border-line">
          {PRODUCTS.map((product, index) => (
            <li
              key={product.slug}
              className="group border-b border-line transition-colors hover:bg-surface"
            >
              <div className="grid gap-x-6 gap-y-5 py-7 sm:grid-cols-[8rem_1fr] lg:grid-cols-[2.5rem_8rem_1fr_11rem] lg:items-start lg:gap-8 lg:py-8">
                <span className="meta hidden pt-1 lg:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-24 w-24 items-center justify-center bg-tile p-2 sm:h-32 sm:w-32">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width={900}
                    height={942}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">
                    <Link
                      href={productHref(product)}
                      className="inline-flex min-h-11 items-center transition-colors hover:text-accent"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="meta mt-1.5">
                    {product.category} / {product.sizes.join(", ")}
                  </p>
                  <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-ink-soft">
                    {product.short}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-2.5 w-36 overflow-hidden sm:w-44">
                      {COLORS.filter((color) => color.family === product.family).map((color) => (
                        <span
                          key={color.code}
                          className="flex-1"
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                    <span className="meta">
                      {COLORS.filter((color) => color.family === product.family).length} warna
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <Link
                      href={productHref(product)}
                      className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-ink link-underline sm:min-h-6"
                    >
                      Detail produk
                      <ArrowUpRight size={14} weight="bold" aria-hidden />
                    </Link>
                    <a
                      href={product.pdf}
                      download
                      className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-ink link-underline sm:min-h-6"
                    >
                      Unduh TDS
                      <DownloadSimple size={14} weight="bold" aria-hidden />
                    </a>
                  </div>
                </div>

                <dl className="hidden gap-3 text-[13px] lg:grid">
                  <div>
                    <dt className="meta">Kemasan</dt>
                    <dd className="mt-1 text-ink">{product.sizes.join(" / ")}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
