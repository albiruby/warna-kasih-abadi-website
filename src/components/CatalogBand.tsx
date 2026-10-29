import { COLORS } from "../data/colors"
import { FAMILIES } from "../data/families"
import { Link } from "../lib/router"

const COUNTS = FAMILIES.map((family) => ({
  label: family.label,
  count: COLORS.filter((color) => color.family === family.id).length,
}))

export default function CatalogBand() {
  return (
    <section aria-labelledby="katalog-beranda" className="border-y border-line bg-surface">
      <div className="page grid gap-8 py-14 sm:grid-cols-[1fr_auto] sm:items-end lg:py-18">
        <div className="max-w-2xl">
          <h2 id="katalog-beranda" className="text-h2 font-semibold text-ink">
            {COLORS.length} kode warna dari tiga lini produk.
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft">
            {COUNTS.map((item) => `${item.label} ${item.count} warna`).join(", ")}. Setiap
            kartu menampilkan kode, nama, dan nilai hex untuk dicocokkan dengan sampel fisik.
          </p>
        </div>
        <Link href="/katalog" className="btn btn-outline w-fit">
          Buka katalog warna
        </Link>
      </div>

      <Link
        href="/katalog"
        aria-label="Buka katalog warna"
        className="block border-t border-line focus-visible:outline-offset-0"
      >
        <div className="flex h-20 w-full items-end sm:h-24 lg:h-28">
          {COLORS.map((color) => (
            <span
              key={`${color.family}-${color.code}`}
              title={`${color.name} ${color.code}`}
              className="h-full flex-1 origin-bottom transition-transform duration-200 hover:scale-y-105"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </Link>
    </section>
  )
}
