import tlucImg from "../imports/T-Luc Gabungan.png"
import pediaLucImg from "../imports/Pedialuc Gabungan.png"
import drySealImg from "../imports/Dryseal Gabungan.png"

interface Benefit {
  title: string
  description: string
  iconPath: string
}

interface ProductDetailData {
  name: string
  nameSuffix: string
  category: string
  description: string
  image: string
  imageAlt: string
  tag: string
  accentColor: string
  accentLight: string
  sizes: string[]
  benefitHeading: string
  benefits: Benefit[]
  pdf: string
}

const ICONS = {
  paint: "M3 16.5V21h4.5L21 7.5 16.5 3 3 16.5ZM14.25 5.25l4.5 4.5M12 19.5h9",
  drop: "M12 3c3.2 3.4 5.25 6.2 5.25 9A5.25 5.25 0 1 1 6.75 12C6.75 9.2 8.8 6.4 12 3Zm-2.25 10.5c.45 1.2 1.3 1.9 2.55 2.1",
  sun: "M12 2.75v2M12 19.25v2M2.75 12h2M19.25 12h2M5.46 5.46l1.42 1.42M17.12 17.12l1.42 1.42M18.54 5.46l-1.42 1.42M6.88 17.12l-1.42 1.42M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
  bolt: "M13.5 2.75 5.75 13h5.75l-1 8.25L18.25 11H12.5l1-8.25Z",
  shield:
    "M12 3 5.5 5.5v5.25c0 4.15 2.6 7.85 6.5 9.25 3.9-1.4 6.5-5.1 6.5-9.25V5.5L12 3Zm-3 9 2 2 4-4",
  sparkle:
    "m12 3 .8 2.2L15 6l-2.2.8L12 9l-.8-2.2L9 6l2.2-.8L12 3ZM6 12l.65 1.85L8.5 14.5l-1.85.65L6 17l-.65-1.85-1.85-.65 1.85-.65L6 12Zm10.5-1 .9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z",
  layers: "m12 3 8 4-8 4-8-4 8-4Zm-8 8 8 4 8-4M4 15l8 4 8-4",
}

export const PRODUCT_DETAILS: Record<string, ProductDetailData> = {
  "/produk/t-luc": {
    name: "T-LUC",
    nameSuffix: "Wall Paint",
    category: "Cat Dinding Interior & Eksterior",
    description:
      "Cat emulsi premium dengan daya tutup sempurna dan formula anti-jamur. T-LUC memberikan warna tajam, hasil akhir halus, serta perlindungan andal terhadap perubahan cuaca tropis Indonesia warna.",
    image: tlucImg,
    imageAlt: "Kemasan T-LUC Wall Paint",
    tag: "PRODUK UNGGULAN",
    accentColor: "#DC2626",
    accentLight: "#FEF2F2",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS T-Luc.pdf",
    benefitHeading: "Perlindungan terbaik untuk setiap dinding",
    benefits: [
      {
        title: "Daya Tutup Tinggi",
        description:
          "Menghasilkan lapisan warna yang rata dan pekat untuk hasil akhir dinding yang lebih sempurna.",
        iconPath: ICONS.paint,
      },
      {
        title: "Anti Jamur",
        description:
          "Formula perlindungan yang membantu menjaga permukaan dinding tetap bersih dan terawat.",
        iconPath: ICONS.drop,
      },
      {
        title: "Tahan Cuaca",
        description:
          "Dirancang untuk menghadapi kondisi tropis Indonesia pada aplikasi interior maupun eksterior.",
        iconPath: ICONS.sun,
      },
      {
        title: "Cepat Kering",
        description:
          "Waktu pengeringan efisien membantu proses pengecatan selesai lebih cepat dan praktis.",
        iconPath: ICONS.bolt,
      },
    ],
  },
  "/produk/pedia-luc": {
    name: "Pedia-Luc",
    nameSuffix: "Wall Paint",
    category: "Cat Dinding Interior & Eksterior",
    description:
      "Cat emulsi serbaguna dengan formula cepat kering untuk berbagai kebutuhan bangunan. Pedia-Luc mudah diaplikasikan, memiliki pilihan warna menarik, dan memberikan perlindungan yang baik untuk permukaan interior maupun eksterior.",
    image: pediaLucImg,
    imageAlt: "Kemasan Pedia-Luc Wall Paint",
    tag: "PRODUK TERLARIS",
    accentColor: "#F59E0B",
    accentLight: "#FFFBEB",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS Pedia-Luc.pdf",
    benefitHeading: "Hasil rapi untuk beragam kebutuhan ruang",
    benefits: [
      {
        title: "Cepat Kering",
        description:
          "Formula efisien membantu lapisan cat mengering lebih cepat sehingga pengerjaan lebih praktis.",
        iconPath: ICONS.bolt,
      },
      {
        title: "Tahan Cuaca",
        description:
          "Memberikan perlindungan yang baik untuk dinding dalam dan luar bangunan di iklim tropis.",
        iconPath: ICONS.sun,
      },
      {
        title: "Perlindungan UV",
        description:
          "Membantu mempertahankan tampilan warna agar tetap menarik saat terpapar cahaya matahari.",
        iconPath: ICONS.shield,
      },
      {
        title: "Mudah Diaplikasikan",
        description:
          "Tekstur cat nyaman diratakan dengan kuas maupun roller untuk hasil akhir yang lebih halus.",
        iconPath: ICONS.paint,
      },
    ],
  },
  "/produk/dry-seal": {
    name: "DRY SEAL",
    nameSuffix: "Waterproof",
    category: "Pelapis Anti Bocor",
    description:
      "Pelapis kedap air fleksibel yang dirancang untuk melindungi bangunan dari rembesan dan kebocoran. DRY SEAL melekat kuat, membantu menutup retak rambut, serta menjaga permukaan dari jamur dan lumut.",
    image: drySealImg,
    imageAlt: "Kemasan DRY SEAL Waterproof",
    tag: "PRODUK ANDALAN",
    accentColor: "#1A3CC8",
    accentLight: "#EEF2FF",
    sizes: ["1 kg", "4 kg", "20 kg"],
    pdf: "/TDS Dry Seal.pdf",
    benefitHeading: "Pertahanan kuat terhadap air dan cuaca",
    benefits: [
      {
        title: "Kuat Mengatasi Air",
        description:
          "Membentuk lapisan kedap air yang membantu mencegah rembesan pada area rawan bocor.",
        iconPath: ICONS.drop,
      },
      {
        title: "Anti Jamur & Lumut",
        description:
          "Membantu menjaga permukaan tetap bersih dari pertumbuhan jamur dan lumut akibat kelembapan.",
        iconPath: ICONS.shield,
      },
      {
        title: "Menutup Retak Rambut",
        description:
          "Lapisan yang rapat membantu menutup retakan halus pada permukaan dinding dan beton.",
        iconPath: ICONS.layers,
      },
      {
        title: "Super Elastis",
        description:
          "Fleksibilitas tinggi membuat lapisan mampu mengikuti perubahan kecil pada permukaan bangunan.",
        iconPath: ICONS.sparkle,
      },
    ],
  },
}

function ArrowLeftIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
    </svg>
  )
}

export default function ProductDetail({
  product,
}: {
  product: ProductDetailData
}) {
  return (
    <main className="overflow-hidden pt-20 lg:pt-24">
      <section className="relative bg-[#F8FAFC]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#0D1B54]" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <a
            href="/#products"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0D1B54] shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:text-[#EA580C] hover:shadow-md"
          >
            <ArrowLeftIcon />
            Kembali ke halaman utama
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative">
              <div
                className="absolute inset-8 rounded-full blur-2xl"
                style={{ backgroundColor: product.accentLight }}
              />
              <div className="relative flex min-h-80 items-center justify-center rounded-[2rem] border border-white bg-white/80 p-8 shadow-xl shadow-slate-200/70 backdrop-blur-sm sm:min-h-[30rem] sm:p-12">
                <span
                  className="absolute left-6 top-6 rounded-full px-3 py-1.5 text-xs font-extrabold tracking-wider text-white"
                  style={{ backgroundColor: product.accentColor }}
                >
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="max-h-80 w-full object-contain drop-shadow-2xl sm:max-h-[25rem]"
                />
              </div>
            </div>

            <div>
              <div
                className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em]"
                style={{ color: product.accentColor }}
              >
                {product.category}
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[#0D1B54] sm:text-5xl lg:text-6xl">
                {product.name}
                <span className="block text-[#1F2937]">
                  {product.nameSuffix}
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                {product.description}
              </p>

              <div className="mb-9">
                <div className="mb-3 text-sm font-extrabold text-[#0D1B54]">
                  Pilihan ukuran
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0D1B54] shadow-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={product.pdf}
                download
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Download Detail Produk
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#EA580C]">
              Keunggulan Produk
            </div>
            <h2 className="text-3xl font-extrabold text-[#0D1B54] sm:text-4xl">
              {product.benefitHeading}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: product.accentLight,
                    color: product.accentColor,
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={benefit.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-[#0D1B54]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-6 text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
