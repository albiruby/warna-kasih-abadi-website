import { useMemo, useState } from "react"
import { CaretDown, MagnifyingGlass, SlidersHorizontal, X } from "@phosphor-icons/react"
import ColorDrawer from "../components/ColorDrawer"
import { BRIGHTNESS, COLORS, GROUPS, isDark, type ColorEntry } from "../data/colors"
import { FAMILIES, familyById, type FamilyId } from "../data/families"
import { Link } from "../lib/router"
import { waLink } from "../lib/site"

type SortKey = "name" | "code" | "family"

const SORT_LABELS: Record<SortKey, string> = {
  name: "Nama A-Z",
  code: "Kode warna",
  family: "Lini produk",
}

export default function Catalog() {
  const [query, setQuery] = useState("")
  const [pickedFamilies, setPickedFamilies] = useState<FamilyId[]>([])
  const [pickedGroups, setPickedGroups] = useState<string[]>([])
  const [brightness, setBrightness] = useState<ColorEntry["brightness"] | "">("")
  const [sort, setSort] = useState<SortKey>("name")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeColor, setActiveColor] = useState<ColorEntry | null>(null)

  const filterCount =
    pickedFamilies.length + pickedGroups.length + (brightness ? 1 : 0) + (query.trim() ? 1 : 0)

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const filtered = COLORS.filter((color) => {
      if (
        needle &&
        !`${color.name} ${color.code} ${color.hex} ${familyById(color.family).label}`
          .toLowerCase()
          .includes(needle)
      ) {
        return false
      }
      if (pickedFamilies.length > 0 && !pickedFamilies.includes(color.family)) return false
      if (pickedGroups.length > 0 && !pickedGroups.includes(color.group)) return false
      if (brightness && color.brightness !== brightness) return false
      return true
    })

    return filtered.sort((a, b) => {
      if (sort === "code") return Number(a.code) - Number(b.code)
      if (sort === "family") {
        const familyOrder = FAMILIES.findIndex((family) => family.id === a.family)
        const otherOrder = FAMILIES.findIndex((family) => family.id === b.family)
        return familyOrder - otherOrder || a.name.localeCompare(b.name)
      }
      return a.name.localeCompare(b.name)
    })
  }, [query, pickedFamilies, pickedGroups, brightness, sort])

  function toggleFamily(id: FamilyId) {
    setPickedFamilies((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  function toggleGroup(group: string) {
    setPickedGroups((current) =>
      current.includes(group) ? current.filter((item) => item !== group) : [...current, group],
    )
  }

  function resetFilters() {
    setQuery("")
    setPickedFamilies([])
    setPickedGroups([])
    setBrightness("")
  }

  return (
    <main className="pb-20">
      <div className="page pt-8 lg:pt-12">
        <nav aria-label="Remah roti" className="text-[13px] text-muted">
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-accent">
            Beranda
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">Katalog</span>
        </nav>

        <div className="mt-6 grid gap-5 border-b border-line pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="text-display font-semibold text-ink">Katalog warna</h1>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
              Klik satu warna untuk melihat kode, nilai hex, dan meminta sampel fisik.
              Cocokkan dengan sampel sebelum membeli dalam jumlah besar.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <p className="meta hidden pb-3 lg:block">
              {COLORS.length} warna / {FAMILIES.length} lini
            </p>
            <a
              href={waLink("Halo WKA, saya ingin meminta sampel warna.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full sm:w-fit lg:mb-0.5"
            >
              Minta sampel
            </a>
          </div>
        </div>
      </div>

      <div className="page mt-8 grid gap-8 lg:grid-cols-[248px_1fr] lg:gap-10">
        <aside aria-label="Filter katalog" className="lg:sticky lg:top-[88px] lg:self-start">
          <button
            type="button"
            onClick={() => setFiltersOpen((value) => !value)}
            aria-expanded={filtersOpen}
            aria-controls="panel-filter"
            className="btn btn-quiet w-full justify-between lg:hidden"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal size={16} aria-hidden />
              {filtersOpen ? "Tutup filter" : "Filter"}
            </span>
            <span className="flex items-center gap-1.5 tabular-nums text-xs text-muted">
              {filterCount > 0 ? `${filterCount} aktif` : "Semua"}
              <CaretDown
                size={14}
                aria-hidden
                className={`transition-transform ${filtersOpen ? "rotate-180" : ""}`}
              />
            </span>
          </button>

          <div
            id="panel-filter"
            className={`${filtersOpen ? "block" : "hidden"} mt-4 lg:mt-0 lg:block lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:pr-1`}
          >
            <div>
              <label htmlFor="cari-warna" className="meta">
                Cari warna
              </label>
              <div className="relative mt-2">
                <MagnifyingGlass
                  size={16}
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="cari-warna"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Nama, kode, atau hex"
                  className="field pl-9 pr-10"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Hapus pencarian"
                    className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-muted hover:text-ink"
                  >
                    <X size={16} aria-hidden />
                  </button>
                )}
              </div>
            </div>

            <details open className="filter-group mt-5 border border-line bg-surface">
              <summary className="flex min-h-11 items-center justify-between gap-2 px-3 text-[13px] font-medium text-ink">
                Lini produk
                <CaretDown size={14} className="caret text-muted" aria-hidden />
              </summary>
              <div className="border-t border-line px-3 py-2">
                {FAMILIES.map((family) => {
                  const count = COLORS.filter((color) => color.family === family.id).length
                  return (
                    <label
                      key={family.id}
                      className="flex min-h-11 cursor-pointer items-center gap-2.5 text-[13px] text-ink-soft"
                    >
                      <input
                        type="checkbox"
                        checked={pickedFamilies.includes(family.id)}
                        onChange={() => toggleFamily(family.id)}
                        className="h-4 w-4 accent-[var(--color-accent)]"
                      />
                      <span className="flex-1">{family.label}</span>
                      <span className="tabular-nums text-[11px] text-muted">{count}</span>
                    </label>
                  )
                })}
              </div>
            </details>

            <details className="filter-group mt-3 border border-line bg-surface">
              <summary className="flex min-h-11 items-center justify-between gap-2 px-3 text-[13px] font-medium text-ink">
                Keluarga warna
                <CaretDown size={14} className="caret text-muted" aria-hidden />
              </summary>
              <div className="border-t border-line px-3 py-2">
                {GROUPS.map((group) => (
                  <label
                    key={group.name}
                    className="flex min-h-11 cursor-pointer items-center gap-2.5 text-[13px] text-ink-soft"
                  >
                    <input
                      type="checkbox"
                      checked={pickedGroups.includes(group.name)}
                      onChange={() => toggleGroup(group.name)}
                      className="h-4 w-4 accent-[var(--color-accent)]"
                    />
                    <span className="flex-1">{group.name}</span>
                    <span className="tabular-nums text-[11px] text-muted">{group.count}</span>
                  </label>
                ))}
              </div>
            </details>

            <details className="filter-group mt-3 border border-line bg-surface">
              <summary className="flex min-h-11 items-center justify-between gap-2 px-3 text-[13px] font-medium text-ink">
                Kecerahan
                <CaretDown size={14} className="caret text-muted" aria-hidden />
              </summary>
              <div className="border-t border-line px-3 py-2">
                {["", ...BRIGHTNESS].map((option) => (
                  <label
                    key={option || "semua"}
                    className="flex min-h-11 cursor-pointer items-center gap-2.5 text-[13px] text-ink-soft"
                  >
                    <input
                      type="radio"
                      name="kecerahan"
                      checked={brightness === option}
                      onChange={() => setBrightness(option as ColorEntry["brightness"] | "")}
                      className="h-4 w-4 accent-[var(--color-accent)]"
                    />
                    <span className="flex-1">{option || "Semua"}</span>
                  </label>
                ))}
              </div>
            </details>

            <button
              type="button"
              onClick={resetFilters}
              disabled={filterCount === 0}
              className="btn btn-quiet mt-3 w-full disabled:cursor-not-allowed disabled:opacity-45"
            >
              Hapus semua filter
            </button>
          </div>
        </aside>

        <section aria-label="Hasil katalog">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <p className="text-[13px] text-ink-soft" role="status">
              Menampilkan <span className="tabular-nums">{results.length}</span> dari{" "}
              <span className="tabular-nums">{COLORS.length}</span> warna
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="urutkan" className="meta">
                Urutkan
              </label>
              <select
                id="urutkan"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="field min-h-11 w-auto py-1.5"
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <option key={key} value={key}>
                    {SORT_LABELS[key]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="mt-8 border border-line bg-surface p-8">
              <h2 className="text-xl font-semibold text-ink">Tidak ada warna yang cocok.</h2>
              <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-soft">
                Coba kurangi filter, gunakan nama lain, atau cari lewat kode tiga digit
                yang tertera di kemasan.
              </p>
              <button type="button" onClick={resetFilters} className="btn btn-outline mt-5">
                Tampilkan semua warna
              </button>
            </div>
          ) : (
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 xl:grid-cols-4">
              {results.map((color) => (
                <li key={`${color.family}-${color.code}`}>
                  <button
                    type="button"
                    onClick={() => setActiveColor(color)}
                    className="group block w-full text-left"
                    aria-label={`${color.name}, kode ${color.code}, ${familyById(color.family).label}`}
                  >
                    <div
                      className="relative aspect-[4/5] w-full border border-line transition-colors group-hover:border-ink"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span
                        className="absolute bottom-0 left-0 px-1.5 py-1 tabular-nums text-[10px]"
                        style={{
                          backgroundColor: isDark(color.hex) ? "rgba(23,24,26,0.82)" : "rgba(255,255,255,0.86)",
                          color: isDark(color.hex) ? "#ffffff" : "#17181a",
                        }}
                      >
                        {color.code}
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <div className="text-[13px] font-semibold leading-snug text-ink">
                        {color.name}
                      </div>
                      <div className="mt-0.5 tabular-nums text-[10.5px] uppercase tracking-[0.08em] text-muted">
                        {familyById(color.family).label} / {color.group}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {activeColor && (
        <ColorDrawer color={activeColor} onClose={() => setActiveColor(null)} />
      )}
    </main>
  )
}
