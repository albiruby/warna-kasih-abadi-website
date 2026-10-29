import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Link, usePathname } from "../lib/router"
import { NAV_LINKS } from "../lib/site"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="page flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Warna Kasih Abadi, beranda">
          <span className="flex h-10 w-10 items-center justify-center border border-line bg-white p-1 lg:h-11 lg:w-11">
            <img src="/logo-wka-mark.png" alt="" width={40} height={40} className="h-full w-full object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-bold tracking-tight text-ink lg:text-[17px]">
              Warna Kasih Abadi
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.14em] text-muted lg:text-[10px]">
              PT / Bogor / Sejak 2020
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/katalog" && pathname === "/katalog"
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-[13px] font-medium transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#kontak" className="btn btn-primary hidden sm:inline-flex">
            Minta penawaran
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="btn btn-quiet h-11 w-11 p-0 lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Navigasi utama, mobile" className="page py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-line/70 text-sm font-medium text-ink last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontak"
              onClick={() => setOpen(false)}
              className="btn btn-primary my-3 w-full"
            >
              Minta penawaran
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
