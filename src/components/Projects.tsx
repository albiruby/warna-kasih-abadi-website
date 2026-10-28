const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&h=500&fit=crop&auto=format',
    title: 'Renovasi Rumah Modern',
    location: 'Bogor, Jawa Barat',
    product: 'T-LUC Wall Paint Interior',
    tag: 'Residensial',
    tagColor: '#1A3CC8',
  },
  {
    img: 'https://images.unsplash.com/photo-1638271267226-a7cf8e3e0dbe?w=700&h=500&fit=crop&auto=format',
    title: 'Komplek Perumahan Grand',
    location: 'Jakarta Selatan',
    product: 'Pedia-Luc Eksterior',
    tag: 'Komersial',
    tagColor: '#DC2626',
  },
  {
    img: 'https://images.unsplash.com/photo-1648475237029-7f853809ca14?w=700&h=500&fit=crop&auto=format',
    title: 'Vila Eksklusif Ciwidey',
    location: 'Bandung, Jawa Barat',
    product: 'T-LUC Premium Interior',
    tag: 'Premium',
    tagColor: '#F59E0B',
  },
  {
    img: 'https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?w=700&h=500&fit=crop&auto=format',
    title: 'Apartemen Signature',
    location: 'Depok, Jawa Barat',
    product: 'Pedia-Luc Interior & Eksterior',
    tag: 'Residensial',
    tagColor: '#1A3CC8',
  },
  {
    img: 'https://images.unsplash.com/photo-1557089732-0d8541f4a8c4?w=700&h=500&fit=crop&auto=format',
    title: 'Hotel Bintang 4 Surabaya',
    location: 'Surabaya, Jawa Timur',
    product: 'DRY SEAL Waterproofing',
    tag: 'Komersial',
    tagColor: '#DC2626',
  },
  {
    img: 'https://images.unsplash.com/photo-1646936190308-6faef1ac893c?w=700&h=500&fit=crop&auto=format',
    title: 'Showroom Otomotif Mewah',
    location: 'Tangerang, Banten',
    product: 'T-LUC Eksterior Premium',
    tag: 'Premium',
    tagColor: '#F59E0B',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FF9648]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 rounded-full text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Galeri Proyek
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2937]">
            Karya Terbaik Kami
          </h2>
          <p className="text-lg text-grey/700 max-w-xl mx-auto leading-relaxed">
            Dari hunian pribadi hingga gedung komersial berskala besar — setiap proyek kami
            kerjakan dengan standar kualitas tertinggi.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-800"
            >
              <div className="aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold text-white mb-2"
                  style={{ backgroundColor: p.tagColor }}
                >
                  {p.tag}
                </span>
                <h3 className="text-base font-extrabold text-white leading-tight">{p.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-white/60">{p.location}</p>
                </div>
                <p className="text-xs text-white/45 mt-0.5">{p.product}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF3131] font-bold rounded-full border-2 border-[#FF3131] hover:bg-[#FF3131] hover:text-white transition-all duration-300"
          >
            Konsultasikan Proyek Anda
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
