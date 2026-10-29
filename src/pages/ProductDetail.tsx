import { ArrowRight, Check, DownloadSimple, WhatsappLogo } from "@phosphor-icons/react"
import { Link } from "../lib/router"
import { PRODUCTS, productHref, type Product } from "../data/products"
import { familyById } from "../data/families"
import { SITE, waLink } from "../lib/site"

export default function ProductDetail({ product }: { product: Product }) {
  const family = familyById(product.family)
  const others = PRODUCTS.filter((item) => item.slug !== product.slug)

  return (
    <main className="pb-20">
      <div className="page pt-8 lg:pt-12">
        <nav aria-label="Remah roti" className="text-[13px] text-muted">
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-accent">
            Beranda
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span aria-hidden>Produk</span>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <figure>
            <div className="flex h-64 items-center justify-center bg-tile p-6 sm:h-80 lg:h-[26rem]">
              <img
                src={product.image}
                alt={product.imageAlt}
                width={900}
                height={942}
                className="h-full w-auto object-contain"
              />
            </div>
            <figcaption className="mt-3 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span className="meta">{family.label} / {product.category}</span>
              <span className="meta">{family.sizes.join(" / ")}</span>
            </figcaption>
          </figure>

          <div>
            <p className="meta">{product.category}</p>
            <h1 className="mt-3 text-h2 font-semibold text-ink">
              {product.name}
              <span className="block text-ink-soft">{product.suffix}</span>
            </h1>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-soft">
              {product.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1.5 text-[13px] text-ink">
                  <Check size={14} weight="bold" className="text-accent" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <span className="meta">Kemasan</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {family.sizes.map((size) => (
                  <span
                    key={size}
                    className="border border-line bg-surface px-3 py-1.5 tabular-nums text-xs text-ink"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(
                  `Halo ${SITE.short}, saya ingin meminta penawaran ${product.name} ${product.suffix}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsappLogo size={18} weight="fill" aria-hidden />
                Minta penawaran
              </a>
              <a href={family.pdf} download className="btn btn-outline">
                <DownloadSimple size={16} aria-hidden />
                Unduh TDS
              </a>
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="keunggulan" className="py-14 lg:py-20">
        <div className="page">
          <h2 id="keunggulan" className="max-w-[30ch] text-h2 font-semibold text-ink">
            {product.benefitHeading}
          </h2>
          <dl className="mt-10 grid gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((benefit, index) => (
              <div key={benefit.title}>
                <dt className="flex items-baseline gap-3 text-base font-semibold text-ink">
                  <span className="tabular-nums text-[11px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {benefit.title}
                </dt>
                <dd className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-12">
        <div className="page flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-ink">Cari warna untuk {product.name}</h2>
            <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-soft">
              {family.label} tersedia dalam {family.sizes.join(", ")}. Katalog menampilkan
              kode dan nilai hex tiap warna.
            </p>
          </div>
          <Link href="/katalog" className="btn btn-outline">
            Buka katalog warna
          </Link>
        </div>
      </section>

      <section aria-labelledby="produk-lain" className="pt-14">
        <div className="page">
          <h2 id="produk-lain" className="meta">
            Lini lainnya
          </h2>
          <ul className="mt-4 border-t border-line">
            {others.map((item) => (
              <li key={item.slug} className="border-b border-line">
                <Link
                  href={productHref(item)}
                  className="group flex items-center gap-5 py-5 transition-colors hover:text-accent"
                >
                  <img
                    src={item.image}
                    alt=""
                    width={900}
                    height={942}
                    loading="lazy"
                    className="h-16 w-16 bg-tile object-contain p-1"
                  />
                  <span className="flex-1">
                    <span className="block text-base font-semibold">{item.name}</span>
                    <span className="mt-1 block text-[13px] text-muted">{item.short}</span>
                  </span>
                  <ArrowRight size={18} className="text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
