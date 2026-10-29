# Screenshot QA

Tangkapan layar hasil pengujian responsif situs Warna Kasih Abadi. Semua berkas diambil dari build lokal (`pnpm dev`, port 5173) memakai Chromium melalui Playwright, skala CSS 1x.

- Halaman penuh (full page) kecuali yang diberi keterangan "viewport".
- Data pada screenshot adalah konten situs saat ini, termasuk contoh testimoni dan foto contoh yang sudah diberi label.
- `_preview-desktop-home.png` adalah versi kecil dari `wka-desktop-home.png` untuk pratinjau cepat.

## Desktop, 1440 x 900

| Berkas | Halaman |
| --- | --- |
| `wka-desktop-home.png` | Beranda |
| `wka-desktop-katalog.png` | Katalog warna (77 warna) |
| `wka-desktop-produk-tluc.png` | Detail T-LUC Wall Paint |
| `wka-desktop-produk-pedialuc.png` | Detail Pedia-Luc Wall Paint |
| `wka-desktop-produk-dryseal.png` | Detail DRY SEAL Waterproof |
| `wka-desktop-404.png` | Halaman tidak ditemukan |

## Tablet, 768 x 1024

| Berkas | Halaman |
| --- | --- |
| `wka-tablet-home.png` | Beranda |
| `wka-tablet-katalog.png` | Katalog warna (filter tertutup) |
| `wka-tablet-produk-tluc.png` | Detail T-LUC Wall Paint |
| `wka-tablet-404.png` | Halaman tidak ditemukan |

## Mobile, 390 x 844

| Berkas | Halaman |
| --- | --- |
| `wka-mobile-home.png` | Beranda |
| `wka-mobile-katalog.png` | Katalog warna |
| `wka-mobile-katalog-filter.png` | Katalog dengan panel filter terbuka |
| `wka-mobile-warna-drawer.png` | Detail warna (drawer, viewport) |
| `wka-mobile-produk-tluc.png` | Detail T-LUC Wall Paint |
| `wka-mobile-produk-pedialuc.png` | Detail Pedia-Luc Wall Paint |
| `wka-mobile-produk-dryseal.png` | Detail DRY SEAL Waterproof |
| `wka-mobile-404.png` | Halaman tidak ditemukan |

## Hasil pengujian

- Tidak ada horizontal overflow pada 360, 390, 414, 768, 820, dan 1024 px.
- Target sentuh utama minimal 44 x 44 px, kontrol sekunder minimal 24 px.
- Header katalog menumpuk di bawah 1024 px agar deskripsi tidak terjepit.
- Panel filter berubah label menjadi "Tutup filter" saat terbuka.
- Drawer warna menahan fokus di panel, bisa ditutup dengan tombol Esc.

## Cara memperbarui

1. Jalankan `pnpm dev --port 5173`.
2. Buka halaman yang ingin diambil pada lebar viewport di tabel.
3. Gulir sampai bawah lebih dulu agar gambar `loading="lazy"` termuat, lalu kembali ke atas.
4. Ambil screenshot full page, simpan dengan nama `wka-{viewport}-{halaman}.png` di folder ini.
