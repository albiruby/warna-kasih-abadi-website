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
| `src/screenshoots/` | Screenshot QA per perangkat |

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

Screenshot per layar, bukan halaman penuh. Dibagi tiga bagian: [desktop](src/screenshoots/desktop), [tablet](src/screenshoots/tablet), [mobile](src/screenshoots/mobile). Daftar lengkap ada di [`src/screenshoots/README.md`](src/screenshoots/README.md).

### Desktop 1440 x 900

| Beranda | Produk | Brand |
| --- | --- | --- |
| [<img src="src/screenshoots/desktop/home-hero.png" width="250" alt="Beranda desktop">](src/screenshoots/desktop/home-hero.png) | [<img src="src/screenshoots/desktop/home-produk.png" width="250" alt="Daftar produk desktop">](src/screenshoots/desktop/home-produk.png) | [<img src="src/screenshoots/desktop/home-brand.png" width="250" alt="Spotlight brand desktop">](src/screenshoots/desktop/home-brand.png) |

| Katalog | Detail produk | 404 |
| --- | --- | --- |
| [<img src="src/screenshoots/desktop/katalog.png" width="250" alt="Katalog desktop">](src/screenshoots/desktop/katalog.png) | [<img src="src/screenshoots/desktop/produk-tluc.png" width="250" alt="Detail T-LUC desktop">](src/screenshoots/desktop/produk-tluc.png) | [<img src="src/screenshoots/desktop/404.png" width="250" alt="Halaman 404 desktop">](src/screenshoots/desktop/404.png) |

### Tablet 768 x 1024

| Beranda | Produk | Katalog |
| --- | --- | --- |
| [<img src="src/screenshoots/tablet/home-hero.png" width="230" alt="Beranda tablet">](src/screenshoots/tablet/home-hero.png) | [<img src="src/screenshoots/tablet/home-produk.png" width="230" alt="Daftar produk tablet">](src/screenshoots/tablet/home-produk.png) | [<img src="src/screenshoots/tablet/katalog.png" width="230" alt="Katalog tablet">](src/screenshoots/tablet/katalog.png) |

| Detail produk | 404 |
| --- | --- |
| [<img src="src/screenshoots/tablet/produk-tluc.png" width="230" alt="Detail T-LUC tablet">](src/screenshoots/tablet/produk-tluc.png) | [<img src="src/screenshoots/tablet/404.png" width="230" alt="Halaman 404 tablet">](src/screenshoots/tablet/404.png) |

### Mobile 390 x 844

| Beranda | Produk | Promo | Katalog |
| --- | --- | --- | --- |
| [<img src="src/screenshoots/mobile/home-hero.png" width="165" alt="Beranda mobile">](src/screenshoots/mobile/home-hero.png) | [<img src="src/screenshoots/mobile/home-produk.png" width="165" alt="Daftar produk mobile">](src/screenshoots/mobile/home-produk.png) | [<img src="src/screenshoots/mobile/home-promo.png" width="165" alt="Blok promo mobile">](src/screenshoots/mobile/home-promo.png) | [<img src="src/screenshoots/mobile/katalog.png" width="165" alt="Katalog mobile">](src/screenshoots/mobile/katalog.png) |

| Filter | Drawer warna | Detail produk | 404 |
| --- | --- | --- | --- |
| [<img src="src/screenshoots/mobile/katalog-filter.png" width="165" alt="Filter katalog mobile">](src/screenshoots/mobile/katalog-filter.png) | [<img src="src/screenshoots/mobile/warna-drawer.png" width="165" alt="Drawer warna mobile">](src/screenshoots/mobile/warna-drawer.png) | [<img src="src/screenshoots/mobile/produk-tluc.png" width="165" alt="Detail T-LUC mobile">](src/screenshoots/mobile/produk-tluc.png) | [<img src="src/screenshoots/mobile/404.png" width="165" alt="Halaman 404 mobile">](src/screenshoots/mobile/404.png) |
