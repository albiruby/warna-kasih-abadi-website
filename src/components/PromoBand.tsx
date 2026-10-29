import { ArrowRight } from "@phosphor-icons/react"
import { COLORS } from "../data/colors"
import { FAMILIES } from "../data/families"
import { Link } from "../lib/router"
import { waLink } from "../lib/site"

export default function PromoBand() {
  return (
    <section id="sampel" aria-labelledby="sampel-warna" className="bg-accent text-white">
      <div className="page grid gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-24">
        <div>
          <h2
            id="sampel-warna"
            className="max-w-[20ch] text-poster font-bold leading-[1.02]"
          >
            Warna yang tepat mengubah cara ruangan diterima.
          </h2>
        </div>

        <div className="max-w-[42ch]">
          <p className="text-base leading-relaxed text-white">
            Sebelum mengecat dinding seluas 400 meter persegi, pastikan warnanya benar.
            Minta sampel fisik, cocokkan di dinding proyek, lalu hitung kebutuhan cat
            bersama tim kami.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink("Halo WKA, saya ingin meminta sampel warna untuk proyek saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-surface text-ink hover:bg-paper sm:w-auto"
            >
              Minta sampel warna
              <ArrowRight size={16} weight="bold" aria-hidden />
            </a>
            <Link
              href="/katalog"
              className="btn w-full border-white/60 text-white hover:bg-white hover:text-accent sm:w-auto"
            >
              Lihat {COLORS.length} warna
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-white">
            {COLORS.length} kode warna dari {FAMILIES.length} lini. TDS tersedia untuk
            setiap produk.
          </p>
        </div>
      </div>
    </section>
  )
}
