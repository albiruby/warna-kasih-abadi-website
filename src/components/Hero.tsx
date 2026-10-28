const HERO_IMG = 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&h=900&fit=crop&auto=format'

const STRIP_COLORS = [
  '#CC1A1A', '#E53935', '#FF7043', '#FFA726',
  '#F59E0B', '#66BB6A', '#26A69A', '#00ACC1',
  '#EA580C', '#C2410C', '#7C2D12', '#EA580C',
  '#F06292', '#90A4AE',
]

const STATS = [
  { value: '100+', label: 'Pilihan Warna' },
  { value: '6+', label: 'Tahun Pengalaman' },
  { value: '100+', label: 'Proyek Selesai' },
  { value: '1.000+', label: 'Mitra' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center min-h-screen pt-20">
      {/* Background — navy → dark orange gradient */}
      <div className="absolute inset-0 bg-white">
        <img
          src={HERO_IMG}
          alt="Interior ruangan dengan cat premium"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] via-[#FB923C]/70 to-transparent" />
      </div>

      {/* Decorative orange glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
        

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
            Cat Tembok Berkualitas{' '}
            <span className="text-[#1F2937]">Tinggi,</span>
            <br />
            Untuk Bisnis{' '}
            <span className="text-[#1F2937]">Anda.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed mb-10 max-w-2xl">
            Didirikan pada Agustus 2020, PT. Warna Kasih Abadi adalah produsen cat tembok
            terpercaya yang melayani kebutuhan B2B di seluruh Indonesia.
            Dengan lebih dari 6 tahun pengalaman,
            kami berkomitmen menghadirkan produk berkualitas tinggi dengan harga kompetitif.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#dd231a] to-[#ee2e25] text-white font-bold text-base rounded-full hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl shadow-white-900/50"
            >
              Lihat Produk Kami
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/35 text-white font-bold text-base rounded-full hover:bg-white/10 transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-white/50 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paint color strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex h-3">
        {STRIP_COLORS.map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
    </section>
  )
}
