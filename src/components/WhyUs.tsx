const BENEFITS = [
  {
    title: 'Ramah Lingkungan',
    desc: 'Kandungan VOC rendah dan bahan non-toxic yang aman untuk keluarga, anak-anak, dan lingkungan sekitar.',
    color: '#059669',
    bg: '#ECFDF5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: '100+ Pilihan Warna',
    desc: 'Koleksi warna terlengkap dengan sistem mixing digital presisi. Dapatkan warna persis sesuai visi Anda.',
    color: '#DC2626',
    bg: '#FEF2F2',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Garansi 5 Tahun',
    desc: 'Jaminan kualitas resmi selama 5 tahun. Tim teknisi kami siap membantu di seluruh wilayah Indonesia.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-[#EA580C] rounded-full text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              Mengapa Memilih WKA
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2937] mb-6 leading-tight">
              Kualitas Premium,
              <br />
              Harga Terjangkau.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Sejak 2020, PT Warna Kasih Abadi berkomitmen menghadirkan produk cat terbaik yang
              memadukan teknologi modern dengan kebutuhan lokal Indonesia.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Dipercaya oleh lebih dari <strong className="text-[#0D1B54]">10.000 pelanggan</strong> mulai
              dari pemilik rumah, kontraktor, hingga developer properti terkemuka di seluruh nusantara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#dd231a] to-[#ee2e25] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Hubungi Tim Kami
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#colors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-[#0D1B54] font-bold rounded-full hover:border-[#EA580C] hover:text-[#EA580C] transition-colors"
              >
                Lihat Katalog Warna
              </a>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map(b => (
              <div
                key={b.title}
                className="p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                style={{ backgroundColor: b.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: b.color + '18', color: b.color }}
                >
                  {b.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#0D1B54] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
