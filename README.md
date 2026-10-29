# Warna Kasih Abadi

Situs profil dan katalog warna PT Warna Kasih Abadi, produsen cat tembok di Bogor. Dibangun ulang dari ekspor Figma Make menjadi situs katalog yang bisa dipakai: pencarian warna, filter lini, detail warna, unduhan TDS, dan permintaan penawaran lewat WhatsApp.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Phosphor Icons
- Font self-host: Inter (teks), Red Hat Display (judul)

## Menjalankan

```bash
pnpm install
pnpm dev --port 5173
```

Build produksi (termasuk typecheck):

```bash
pnpm build
pnpm preview
```

## Struktur

| Path | Isi |
| --- | --- |
| `src/pages/` | Beranda, katalog, detail produk, 404 |
| `src/components/` | Navbar, hero carousel, produk, pita warna, promo, kontak, footer, drawer warna |
| `src/data/` | 3 lini produk dan 77 kode warna (sumber tunggal) |
| `src/lib/` | Router kecil berbasis History API dan data kontak |
| `public/produk/` | Foto kemasan produk (WebP) |
| `public/contoh/` | Foto contoh penerapan (Unsplash, diberi label) |
| `public/fonts/` | Font WOFF2 |
| `public/*.pdf` | TDS T-Luc, Pedia-Luc, Dry Seal |
| `src/screenshoots/` | Screenshot QA lengkap |

## Halaman

| URL | Keterangan |
| --- | --- |
| `/` | Beranda |
| `/katalog` | Katalog 77 warna dengan filter dan pencarian |
| `/produk/t-luc` | Detail T-LUC Wall Paint |
| `/produk/pedia-luc` | Detail Pedia-Luc Wall Paint |
| `/produk/dry-seal` | Detail DRY SEAL Waterproof |

Karena memakai History API, hosting perlu fallback SPA ke `index.html` agar URL di atas bisa dibuka langsung.

## Catatan konten

- Angka di beranda hanya yang bisa diverifikasi: tahun berdiri, jumlah lini, jumlah kode warna, jumlah TDS.
- Bagian "Contoh penerapan" memakai foto Unsplash dan bagian "Contoh testimoni" berisi teks contoh. Keduanya diberi label jelas dan harus diganti dengan materi asli sebelum publikasi.
- Formulir penawaran menyusun pesan lalu membukanya di WhatsApp. Tidak ada data yang disimpan di situs.

## Screenshot

Semua screenshot adalah halaman penuh pada skala CSS 1x, diambil dengan Chromium. Galeri dan daftar berkas ada di [`src/screenshoots/README.md`](src/screenshoots/README.md).

### Desktop 1440 x 900

![Beranda desktop](src/screenshoots/wka-desktop-home.png)
![Katalog desktop](src/screenshoots/wka-desktop-katalog.png)
![Detail T-LUC desktop](src/screenshoots/wka-desktop-produk-tluc.png)
![Detail Pedia-Luc desktop](src/screenshoots/wka-desktop-produk-pedialuc.png)
![Detail DRY SEAL desktop](src/screenshoots/wka-desktop-produk-dryseal.png)
![Halaman 404 desktop](src/screenshoots/wka-desktop-404.png)

### Tablet 768 x 1024

![Beranda tablet](src/screenshoots/wka-tablet-home.png)
![Katalog tablet](src/screenshoots/wka-tablet-katalog.png)
![Detail T-LUC tablet](src/screenshoots/wka-tablet-produk-tluc.png)
![Halaman 404 tablet](src/screenshoots/wka-tablet-404.png)

### Mobile 390 x 844

![Beranda mobile](src/screenshoots/wka-mobile-home.png)
![Katalog mobile](src/screenshoots/wka-mobile-katalog.png)
![Filter katalog mobile](src/screenshoots/wka-mobile-katalog-filter.png)
![Drawer warna mobile](src/screenshoots/wka-mobile-warna-drawer.png)
![Detail T-LUC mobile](src/screenshoots/wka-mobile-produk-tluc.png)
![Detail Pedia-Luc mobile](src/screenshoots/wka-mobile-produk-pedialuc.png)
![Detail DRY SEAL mobile](src/screenshoots/wka-mobile-produk-dryseal.png)
![Halaman 404 mobile](src/screenshoots/wka-mobile-404.png)
