const TESTIMONIALS = [
  {
    name: 'Rudi Santoso',
    city: 'Jakarta Selatan',
    role: 'Pemilik Rumah',
    rating: 5,
    text: 'Cat T-LUC benar-benar luar biasa! Sudah 3 tahun rumah saya tidak pernah terlihat kusam. Warnanya tetap cerah meskipun sering kena hujan dan panas terik Jakarta. Sangat puas!',
    initials: 'RS',
    color: '#DC2626',
  },
  {
    name: 'Sari Dewi, S.Ars.',
    city: 'Bandung',
    role: 'Arsitek Interior',
    rating: 5,
    text: 'Sebagai arsitek, saya sangat selektif memilih cat. WKA memberikan kualitas setara produk impor dengan harga jauh lebih terjangkau. Kini semua proyek saya menggunakan WKA.',
    initials: 'SD',
    color: '#EA580C',
  },
  {
    name: 'PT Bumi Graha Perkasa',
    city: 'Bogor',
    role: 'Developer Properti',
    rating: 5,
    text: 'Kami menggunakan DRY SEAL untuk ratusan unit di kompleks kami. Tidak ada satu pun laporan kebocoran dari penghuni selama 2 tahun. Produk terpercaya untuk developer.',
    initials: 'BG',
    color: '#059669',
  },
  {
    name: 'Hendra Wijaya',
    city: 'Surabaya',
    role: 'Kontraktor Bangunan',
    rating: 5,
    text: 'Daya tutup Pedia-Luc sangat bagus — hemat dalam pemakaian, hasil merata dan halus. Tim teknis WKA juga responsif saat ada pertanyaan teknis di lapangan. Recommended!',
    initials: 'HW',
    color: '#F59E0B',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-[#F59E0B]' : 'text-gray-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#EA580C] rounded-full text-sm font-semibold mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            Testimoni Pelanggan
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B54] mb-4">
            Mereka Sudah Percaya
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Lebih dari 500+ pelanggan telah mempercayakan proyek mereka kepada PT Warna Kasih Abadi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <StarRating count={t.rating} />

              <p className="text-sm text-gray-600 leading-relaxed my-4 italic flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0D1B54] leading-tight">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.role} · {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-t border-gray-200">
          {[
            { value: '500+', label: 'Pelanggan Puas' },
            { value: '4.9/5', label: 'Rating Rata-rata' },
            { value: '98%', label: 'Tingkat Kepuasan' },
            { value: '30+', label: 'Kota Jangkauan' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#EA580C]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
