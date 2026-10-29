import { ArrowRight } from "@phosphor-icons/react"
import { COLORS } from "../data/colors"
import { Link } from "../lib/router"
import { ColorBand } from "./ColorBand"
import HeroCarousel from "./HeroCarousel"

const BAND = COLORS.filter((_, index) => index % 3 === 0)
  .slice(0, 26)
  .map((color) => color.hex)

export default function Hero() {
  return (
    <section id="beranda" className="border-b border-line">
      <div className="page grid items-center gap-10 pt-9 pb-12 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:pt-14 lg:pb-16">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-wka-mark.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0 border border-line bg-white object-contain"
            />
            <p className="meta">
              <span className="sm:hidden">PT Warna Kasih Abadi / Bogor</span>
              <span className="hidden sm:inline">
                PT Warna Kasih Abadi / Bogor, sejak Agustus 2020
              </span>
            </p>
          </div>
          <h1 className="mt-5 text-display font-bold text-ink">
            Cat tembok untuk
            <br className="hidden sm:block" /> proyek yang diuji.
          </h1>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            Produsen cat di Bogor sejak 2020. {COLORS.length} kode warna, sampel fisik,
            dan TDS siap pakai untuk spesifikasi proyek.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/katalog" className="btn btn-primary w-full sm:w-auto">
              Buka katalog warna
              <ArrowRight size={16} weight="bold" aria-hidden />
            </Link>
            <Link href="/#kontak" className="btn btn-outline w-full sm:w-auto">
              Minta penawaran
            </Link>
          </div>
        </div>

        <HeroCarousel />
      </div>
      <ColorBand colors={BAND} height="h-1.5" className="opacity-70" />
    </section>
  )
}
