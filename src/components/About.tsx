const DETAILS = [
  ["Berdiri", "Agustus 2020"],
  ["Kantor pusat", "Bogor, Jawa Barat"],
  ["Lini produk", "3"],
  ["Kode warna", "77"],
  ["Dokumen teknis", "TDS untuk 3 produk"],
]

const MISI = [
  "Menjaga mutu produk di setiap batch produksi.",
  "Bekerja dengan integritas terhadap mitra dan pelanggan.",
  "Membangun kemitraan yang saling menguntungkan.",
  "Memberdayakan karyawan dan lingkungan sekitar.",
]

export default function About() {
  return (
    <section id="tentang" className="py-16 lg:py-24">
      <div className="page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h2 className="max-w-[24ch] text-h2 font-semibold text-ink">
            Produsen cat di Bogor sejak Agustus 2020.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              PT Warna Kasih Abadi memproduksi cat tembok untuk kebutuhan rumah tangga
              dan proyek. Produk dipasarkan melalui tiga merek: T-LUC, Pedia-Luc, dan
              DRY SEAL.
            </p>
            <p>
              Kami bekerja dengan toko bangunan, kontraktor, dan pemilik proyek. Setiap
              produk memiliki lembar data teknis agar spesifikasi bisa diperiksa sebelum
              pengecatan dimulai.
            </p>
          </div>

          <dl className="mt-9 border-t border-line">
            {DETAILS.map(([term, value]) => (
              <div key={term} className="flex justify-between gap-6 border-b border-line py-3">
                <dt className="meta pt-0.5">{term}</dt>
                <dd className="text-right text-sm font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-8 border-line sm:grid-cols-2 lg:grid-cols-1 lg:border-l lg:pl-12">
          <div>
            <h3 className="meta">Visi</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              Menjadi perusahaan manufaktur cat di Indonesia yang unggul dalam kualitas
              produk, sekaligus menjadi saluran berkat bagi masyarakat, karyawan, dan
              lingkungan.
            </p>
          </div>
          <div className="border-t border-line pt-8">
            <h3 className="meta">Misi</h3>
            <ol className="mt-3 space-y-3">
              {MISI.map((item, index) => (
                <li key={item} className="flex gap-4 text-base leading-relaxed text-ink-soft">
                  <span className="tabular-nums text-xs text-muted pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
