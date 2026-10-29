import { COLORS } from "../data/colors"
import { SITE } from "../lib/site"
import { ColorBand } from "./ColorBand"

const BAND = COLORS.filter((_, index) => index % 2 === 0).map((color) => color.hex)

export default function BrandSpotlight() {
  return (
    <section aria-labelledby="judul-brand" className="border-t border-line bg-surface">
      <div className="page pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="flex items-center gap-3">
          <img
            src="/logo-wka-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 border border-line bg-white object-contain p-0.5"
          />
          <p className="meta">Warna Kasih Abadi / produsen cat tembok</p>
        </div>

        <h2
          id="judul-brand"
          className="mt-6 font-display text-[clamp(2.75rem,8vw,7.5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-ink"
        >
          Warna Kasih Abadi<span className="text-accent">.</span>
        </h2>

        <div className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-[1fr_auto] sm:items-baseline">
          <p className="max-w-[62ch] text-sm leading-relaxed text-ink-soft">
            Tiga lini cat tembok dari Bogor: T-LUC, Pedia-Luc, dan DRY SEAL.{" "}
            {COLORS.length} kode warna dengan lembar data teknis untuk setiap produk.
          </p>
          <p className="meta">
            {SITE.founded} / Bogor, Jawa Barat
          </p>
        </div>
      </div>
      <ColorBand colors={BAND} height="h-2" />
    </section>
  )
}
