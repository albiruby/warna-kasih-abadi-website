import { Link } from "../lib/router"

export default function NotFound({ path }: { path: string }) {
  return (
    <main id="konten" className="page flex min-h-[70dvh] flex-col justify-center py-20">
      <p className="meta">404</p>
      <h1 className="mt-3 max-w-[24ch] text-h2 font-semibold text-ink">
        Halaman tidak ditemukan.
      </h1>
      <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-soft">
        Alamat <span className="tabular-nums text-sm text-ink">{path}</span> tidak tersedia.
        Mungkin tautannya berubah, atau produknya sudah diganti nama.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Kembali ke beranda
        </Link>
        <Link href="/katalog" className="btn btn-outline">
          Buka katalog warna
        </Link>
      </div>
    </main>
  )
}
