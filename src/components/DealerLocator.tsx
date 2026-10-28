import { useState } from 'react'

const DEALERS = [
  {
    city: 'Bogor (Kantor Pusat)',
    address: 'Bogor, Jawa Barat, Indonesia',
    phone: '0822 6186 0336',
    hours: 'Sen–Jum: 08.00–17.00 WIB',
    email: 'digitalmarketingwka@gmail.com',
    isHQ: true,
  },
]
export default function DealerLocator() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-[#EA580C] rounded-full text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            Jaringan Distribusi
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0D1B54] mb-4">
            Temukan Dealer Terdekat
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Produk WKA tersedia di berbagai kota di Indonesia. Kunjungi dealer resmi kami
            atau hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Dealer cards — 2 cols */}
          <div className="flex flex-col gap-4">
            {DEALERS.map(d => (
              <div
                key={d.city}
                className={`p-5 rounded-2xl border transition-all hover:shadow-md ${
                  d.isHQ
                    ? 'border-[#EA580C]/40 bg-[#FFF7ED]'
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-extrabold text-[#0D1B54] text-sm">{d.city}</h3>
                  {d.isHQ && (
                    <span className="px-2 py-0.5 bg-[#EA580C] text-white text-[10px] font-bold rounded-full">
                      HQ
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{d.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{d.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{d.hours}</span>
                  </div>
                  {d.email && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${d.email}`} className="hover:text-[#EA580C] transition-colors">{d.email}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form + WhatsApp */}
          <div className="space-y-4">
            <div className="p-6 bg-[#0D1B54] rounded-2xl text-white">
              <h3 className="text-xl font-extrabold mb-1.5">Minta Penawaran</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Tim konsultan kami siap membantu Anda memilih produk yang tepat.
              </p>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-bold text-white">Terima Kasih!</p>
                  <p className="text-white/60 text-sm mt-1">Tim kami akan segera menghubungi Anda.</p>
                </div>
              ) : (
                <form
                  className="space-y-3"
                  onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
                >
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="No. Telepon / WhatsApp"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-900">Jenis Produk</option>
                    <option value="interior" className="text-gray-900">Cat Interior</option>
                    <option value="exterior" className="text-gray-900">Cat Eksterior</option>
                    <option value="waterproof" className="text-gray-900">Waterproofing</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Deskripsikan kebutuhan Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl hover:bg-[#D97706] transition-colors"
                  >
                    Kirim Permintaan
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6282261860336?text=Halo%20WKA%2C%20saya%20ingin%20informasi%20tentang%20produk%20cat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Gratis Konsultasi Via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
