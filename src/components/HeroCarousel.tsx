import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import { COLORS } from "../data/colors"
import { PRODUCTS } from "../data/products"
import { ColorBand } from "./ColorBand"

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const product = PRODUCTS[index]
  const palette = COLORS.filter((color) => color.family === product.family)
  const total = PRODUCTS.length

  function move(step: number) {
    setIndex((current) => (current + step + total) % total)
  }

  return (
    <section aria-roledescription="carousel" aria-label="Produk cat Warna Kasih Abadi">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div>
          <p className="meta">
            Lini {String(index + 1).padStart(2, "0")} dari {String(total).padStart(2, "0")}
          </p>
          <h2 className="mt-1 text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {product.name}
          </h2>
          <p className="mt-1 text-[13px] text-ink-soft">{product.category}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Produk sebelumnya"
            className="btn btn-quiet h-11 w-11 p-0"
          >
            <ArrowLeft size={18} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Produk berikutnya"
            className="btn btn-quiet h-11 w-11 p-0"
          >
            <ArrowRight size={18} aria-hidden />
          </button>
        </div>
      </div>

      <div className="flex h-60 items-center justify-center bg-tile px-6 sm:h-72 lg:h-[380px]">
        <img
          key={product.slug}
          src={product.image}
          alt={product.imageAlt}
          width={900}
          height={942}
          fetchPriority="high"
          className="stage-image h-full w-auto object-contain"
        />
      </div>

      <ColorBand colors={palette.map((color) => color.hex)} height="h-8" />

      <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="meta">{palette.length} warna tersedia</p>
        <p className="meta">Kemasan {product.sizes.join(" / ")}</p>
      </div>

      <p className="sr-only" aria-live="polite">
        {product.name}, lini {index + 1} dari {total}
      </p>
    </section>
  )
}
