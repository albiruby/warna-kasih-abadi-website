import tlucImg from "../imports/T-Luc Gabungan.png"
import pediaLucImg from "../imports/Pedialuc Gabungan.png"
import drySealImg from "../imports/Dryseal Gabungan.png"

interface Product {
  id: number
  name: string
  category: string
  description: string
  features: string[]
  color: string
  colorLight: string
  localImg?: string
  remoteImg?: string
  tag: string | null
  href: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "T-LUC Wall Paint",
    category: "Cat Dinding Interior & Eksterior",
    description:
      "Cat emulsi premium dengan daya tutup sempurna dan formula anti-jamur. Tahan terhadap perubahan cuaca tropis Indonesia.",
    features: [
      "Cepat Kering",
      "Anti Jamur",
      "Tahan Cuaca",
      "Daya Tutup Tinggi",
    ],
    color: "#DC2626",
    colorLight: "#FEF2F2",
    localImg: tlucImg,
    tag: "UNGGULAN",
    href: "/produk/t-luc",
  },
  {
    id: 2,
    name: "Pedia-Luc Wall Paint",
    category: "Cat Dinding Interior & Eksterior",
    description:
      "Cat emulsi serbaguna dengan formula cepat kering. Cocok untuk semua jenis permukaan dalam dan luar bangunan.",
    features: ["Cepat Kering", "Tahan Cuaca", "Anti UV", "Mudah Diaplikasikan"],
    color: "#F59E0B",
    colorLight: "#FFFBEB",
    localImg: pediaLucImg,
    tag: "TERLARIS",
    href: "/produk/pedia-luc",
  },
  {
    id: 3,
    name: "DRY SEAL Waterproof",
    category: "Pelapis Anti Bocor",
    description:
      "Lapisan waterproof fleksibel basecoat yang kuat mengatasi air, anti-jamur & lumut, serta menutup retak rambut.",
    features: [
      "Kuat Atasi Air",
      "Anti Jamur & Lumut",
      "Tutup Retak Rambut",
      "Super Elastis",
    ],
    color: "#1A3CC8",
    colorLight: "#EEF2FF",
    localImg: drySealImg,
    tag: "ANDALAN",
    href: "/produk/dry-seal",
  },
]

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
      <path
        d="M5 8l2 2 4-4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-[#EA580C] rounded-full text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            Produk Unggulan
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2937] mb-4">
            Pilihan Cat Terbaik Kami
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Dari cat interior hingga waterproofing — solusi lengkap untuk setiap
            kebutuhan bangunan Anda.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              aria-label={`Lihat detail ${product.name}`}
            >
              {/* Tag */}
              {product.tag && (
                <div
                  className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[11px] font-bold text-white rounded-full tracking-wide"
                  style={{ backgroundColor: product.color }}
                >
                  {product.tag}
                </div>
              )}

              {/* Image */}
              <div
                className="h-52 overflow-hidden"
                style={{ backgroundColor: product.colorLight }}
              >
                <img
                  src={product.localImg ?? product.remoteImg}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <div
                  className="text-[11px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: product.color }}
                >
                  {product.category}
                </div>
                <h3 className="text-lg font-extrabold text-[#0D1B54] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {product.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckIcon color={product.color} />
                      {f}
                    </li>
                  ))}
                </ul>

                <span
                  className="flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-bold transition-all hover:opacity-90"
                  style={{
                    backgroundColor: product.colorLight,
                    color: product.color,
                  }}
                >
                  Selengkapnya →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#dd231a] text-white font-bold rounded-full hover:bg-[#ee2e25] transition-colors"
          >
            Lihat Semua Produk
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
