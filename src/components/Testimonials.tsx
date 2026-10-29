const QUOTES = [
  {
    text: "Daya tutupnya bagus. Dinding lama tidak belang setelah dua lapisan.",
    role: "Kontraktor, Bogor",
  },
  {
    text: "Pedia-Luc cepat kering, tukang bisa lanjut ke lapisan berikutnya di hari yang sama.",
    role: "Toko bangunan, Jakarta",
  },
  {
    text: "DRY SEAL dipakai di dak beton. Dua musim hujan, belum ada laporan rembesan.",
    role: "Pemilik proyek, Surabaya",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-h2 font-semibold text-ink">Contoh testimoni.</h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft">
              Tata letak untuk kutipan pelanggan.
            </p>
          </div>
          <p className="max-w-[34ch] border-l-2 border-line-strong pl-4 text-[13px] leading-relaxed text-muted">
            Teks di bawah adalah contoh, bukan pernyataan pelanggan nyata. Ganti dengan
            kutipan asli beserta izin pemakaian sebelum publikasi.
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
          {QUOTES.map((quote) => (
            <figure key={quote.text} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <blockquote className="text-lg leading-relaxed text-ink">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[13px] text-muted">{quote.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
