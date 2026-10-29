export const SITE = {
  company: "PT Warna Kasih Abadi",
  short: "Warna Kasih Abadi",
  phoneDisplay: "0822 6186 0336",
  phoneIntl: "6282261860336",
  email: "digitalmarketingwka@gmail.com",
  address: "Kantor pusat: Bogor, Jawa Barat, Indonesia",
  hours: "Senin sampai Jumat, 08.00 sampai 17.00 WIB",
  instagram: "https://instagram.com/warnakasihabadi.official",
  instagramHandle: "@warnakasihabadi.official",
  founded: "Agustus 2020",
}

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`
}

export const WA_MESSAGES = {
  general: "Halo WKA, saya ingin bertanya tentang produk cat.",
  quote: "Halo WKA, saya ingin meminta penawaran.",
  sample: "Halo WKA, saya ingin meminta sampel warna.",
}

export const NAV_LINKS = [
  { label: "Produk", href: "/#produk" },
  { label: "Katalog", href: "/katalog" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Proyek", href: "/#proyek" },
  { label: "Kontak", href: "/#kontak" },
]
