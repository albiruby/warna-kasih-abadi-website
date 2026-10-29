# Screenshot QA

Tangkapan layar per layar (viewport), bukan halaman penuh, supaya ringkas dan tidak memakan ruang. Diambil dari build lokal (`pnpm dev --port 5173`) memakai Chromium via Playwright, skala CSS 1x.

Folder dipisah per perangkat:

```
src/screenshoots/
  desktop/   1440 x 900
  tablet/    768 x 1024
  mobile/    390 x 844
```

## Desktop, 1440 x 900

| Berkas | Layar |
| --- | --- |
| `desktop/home-hero.png` | Beranda, bagian hero dan carousel produk |
| `desktop/home-produk.png` | Beranda, daftar tiga lini produk |
| `desktop/home-brand.png` | Beranda, spotlight brand dan footer |
| `desktop/katalog.png` | Katalog warna |
| `desktop/produk-tluc.png` | Detail T-LUC Wall Paint |
| `desktop/404.png` | Halaman tidak ditemukan |

## Tablet, 768 x 1024

| Berkas | Layar |
| --- | --- |
| `tablet/home-hero.png` | Beranda, hero |
| `tablet/home-produk.png` | Beranda, daftar produk |
| `tablet/katalog.png` | Katalog warna |
| `tablet/produk-tluc.png` | Detail T-LUC Wall Paint |
| `tablet/404.png` | Halaman tidak ditemukan |

## Mobile, 390 x 844

| Berkas | Layar |
| --- | --- |
| `mobile/home-hero.png` | Beranda, hero |
| `mobile/home-produk.png` | Beranda, daftar produk |
| `mobile/home-promo.png` | Beranda, blok promo sampel |
| `mobile/katalog.png` | Katalog warna |
| `mobile/katalog-filter.png` | Katalog dengan panel filter terbuka |
| `mobile/warna-drawer.png` | Drawer detail warna |
| `mobile/produk-tluc.png` | Detail T-LUC Wall Paint |
| `mobile/404.png` | Halaman tidak ditemukan |

## Hasil pengujian

- Tidak ada horizontal overflow pada 360, 390, 414, 768, 820, dan 1024 px.
- Target sentuh utama minimal 44 x 44 px, kontrol sekunder minimal 24 px.
- Header katalog menumpuk di bawah 1024 px agar deskripsi tidak terjepit.
- Panel filter berubah label menjadi "Tutup filter" saat terbuka.
- Drawer warna menahan fokus di panel dan bisa ditutup dengan Esc.

## Cara memperbarui

1. Jalankan `pnpm dev --port 5173`.
2. Buka halaman pada lebar viewport yang diinginkan.
3. Untuk layar yang bukan paling atas, gulir ke section terkait lalu kurangi tinggi header sticky (72 px desktop, 64 px mobile).
4. Ambil screenshot viewport (bukan full page) dan simpan dengan nama `{layar}.png` di folder perangkat yang sesuai.
