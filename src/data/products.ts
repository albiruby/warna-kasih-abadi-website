import { familyById, type FamilyId } from "./families"

export interface Benefit {
  title: string
  description: string
}

export interface Product {
  slug: string
  family: FamilyId
  name: string
  suffix: string
  category: string
  short: string
  description: string
  image: string
  imageAlt: string
  sizes: string[]
  pdf: string
  features: string[]
  benefitHeading: string
  benefits: Benefit[]
}

export const PRODUCTS: Product[] = [
  {
    slug: "t-luc",
    family: "t-luc",
    name: "T-LUC",
    suffix: "Wall Paint",
    category: "Cat dinding interior dan eksterior",
    short: "Daya tutup tinggi dan formula anti jamur untuk dinding yang sering terpapar cuaca.",
    description:
      "Cat emulsi dengan daya tutup tinggi dan formula anti jamur. T-LUC memberi lapisan warna yang rata, hasil akhir halus, serta perlindungan terhadap perubahan cuaca tropis.",
    image: "/produk/t-luc-cut.webp",
    imageAlt: "Kemasan T-LUC Wall Paint",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS T-Luc.pdf",
    features: ["Daya tutup tinggi", "Anti jamur", "Tahan cuaca", "Cepat kering"],
    benefitHeading: "Perlindungan untuk dinding yang sering terpapar",
    benefits: [
      {
        title: "Daya tutup tinggi",
        description:
          "Menghasilkan lapisan warna yang rata dan pekat sehingga jumlah lapisan yang dibutuhkan lebih sedikit.",
      },
      {
        title: "Anti jamur",
        description:
          "Formula perlindungan yang membantu menjaga permukaan dinding tetap bersih dan terawat.",
      },
      {
        title: "Tahan cuaca",
        description:
          "Dirancang untuk kondisi tropis Indonesia, baik untuk aplikasi interior maupun eksterior.",
      },
      {
        title: "Cepat kering",
        description:
          "Waktu pengeringan efisien membantu pengecatan selesai lebih cepat.",
      },
    ],
  },
  {
    slug: "pedia-luc",
    family: "pedia-luc",
    name: "Pedia-Luc",
    suffix: "Wall Paint",
    category: "Cat dinding interior dan eksterior",
    short: "Cat serbaguna yang cepat kering, mudah diratakan dengan kuas maupun roller.",
    description:
      "Cat emulsi serbaguna dengan formula cepat kering untuk berbagai kebutuhan bangunan. Mudah diaplikasikan, tersedia dalam banyak pilihan warna, dan cocok untuk permukaan interior maupun eksterior.",
    image: "/produk/pedia-luc-cut.webp",
    imageAlt: "Kemasan Pedia-Luc Wall Paint",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS Pedia-Luc.pdf",
    features: ["Cepat kering", "Tahan cuaca", "Perlindungan UV", "Mudah diaplikasikan"],
    benefitHeading: "Hasil rapi untuk beragam kebutuhan ruang",
    benefits: [
      {
        title: "Cepat kering",
        description:
          "Lapisan cat mengering lebih cepat sehingga pengerjaan berikutnya bisa segera dimulai.",
      },
      {
        title: "Tahan cuaca",
        description:
          "Memberi perlindungan untuk dinding dalam dan luar bangunan di iklim tropis.",
      },
      {
        title: "Perlindungan UV",
        description:
          "Membantu mempertahankan tampilan warna saat terpapar cahaya matahari.",
      },
      {
        title: "Mudah diaplikasikan",
        description:
          "Tekstur cat nyaman diratakan dengan kuas maupun roller untuk hasil akhir yang halus.",
      },
    ],
  },
  {
    slug: "dry-seal",
    family: "dry-seal",
    name: "DRY SEAL",
    suffix: "Waterproof",
    category: "Pelapis anti bocor",
    short: "Lapisan kedap air fleksibel untuk atap, dinding, dan area yang sering terkena air.",
    description:
      "Pelapis kedap air fleksibel yang melindungi bangunan dari rembesan dan kebocoran. DRY SEAL melekat kuat, membantu menutup retak rambut, serta menjaga permukaan dari jamur dan lumut.",
    image: "/produk/dry-seal-cut.webp",
    imageAlt: "Kemasan DRY SEAL Waterproof",
    sizes: ["1 kg", "4 kg", "20 kg"],
    pdf: "/TDS Dry Seal.pdf",
    features: ["Kuat mengatasi air", "Anti jamur dan lumut", "Menutup retak rambut", "Super elastis"],
    benefitHeading: "Pertahanan terhadap air dan cuaca",
    benefits: [
      {
        title: "Kuat mengatasi air",
        description:
          "Membentuk lapisan kedap air yang membantu mencegah rembesan pada area rawan bocor.",
      },
      {
        title: "Anti jamur dan lumut",
        description:
          "Membantu menjaga permukaan tetap bersih dari pertumbuhan jamur dan lumut akibat kelembapan.",
      },
      {
        title: "Menutup retak rambut",
        description:
          "Lapisan rapat membantu menutup retakan halus pada permukaan dinding dan beton.",
      },
      {
        title: "Super elastis",
        description:
          "Fleksibilitas tinggi membuat lapisan mampu mengikuti perubahan kecil pada permukaan bangunan.",
      },
    ],
  },
]

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug)
}

export const PRODUCT_COUNT = PRODUCTS.length

export function productHref(product: Product) {
  return `/produk/${product.slug}`
}

export function productFamilyLabel(product: Product) {
  return familyById(product.family).label
}
