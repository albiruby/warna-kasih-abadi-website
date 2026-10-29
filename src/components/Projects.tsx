const EXAMPLES = [
  {
    title: "Dinding interior",
    product: "T-LUC",
    note: "Ruang tamu dan kamar dengan paparan cahaya tidak langsung.",
    image: "/contoh/interior.webp",
    credit: "Foto contoh: Unsplash",
  },
  {
    title: "Fasad eksterior",
    product: "Pedia-Luc",
    note: "Dinding luar yang terkena hujan dan matahari langsung.",
    image: "/contoh/fasad.webp",
    credit: "Foto contoh: Unsplash",
  },
  {
    title: "Area basah",
    product: "DRY SEAL",
    note: "Kamar mandi, dinding basah, dan area yang sering terkena air.",
    image: "/contoh/area-basah.webp",
    credit: "Foto contoh: Unsplash",
  },
]

export default function Projects() {
  return (
    <section id="proyek" className="border-y border-line bg-surface py-16 lg:py-24">
      <div className="page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-semibold text-ink">Contoh penerapan.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Tiga situasi pemakaian yang paling sering ditanyakan saat memilih produk.
            </p>
          </div>
          <p className="max-w-[34ch] border-l-2 border-line-strong pl-4 text-[13px] leading-relaxed text-muted">
            Foto contoh dari Unsplash, bukan dokumentasi proyek WKA. Ganti dengan foto
            proyek sendiri sebelum publikasi.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr] md:grid-rows-2">
          {EXAMPLES.map((item, index) => (
            <figure
              key={item.title}
              className={index === 0 ? "md:row-span-2" : ""}
            >
              <div
                className={
                  index === 0
                    ? "overflow-hidden bg-tile h-72 md:h-[520px]"
                    : "overflow-hidden bg-tile h-56 md:h-[252px]"
                }
              >
                <img
                  src={item.image}
                  alt={`Ilustrasi ${item.title.toLowerCase()}`}
                  loading="lazy"
                  width={index === 0 ? 1200 : 800}
                  height={index === 0 ? 900 : 500}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold text-ink">{item.title}</span>
                  <span className="ml-2 tabular-nums text-[11px] uppercase tracking-wider text-accent">
                    {item.product}
                  </span>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.note}</p>
                </div>
                <span className="shrink-0 text-[11px] text-muted">{item.credit}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
