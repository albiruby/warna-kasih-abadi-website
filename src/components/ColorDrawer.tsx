import { useEffect, useRef, useState } from "react"
import { Check, Copy, DownloadSimple, WhatsappLogo, X } from "@phosphor-icons/react"
import type { ColorEntry } from "../data/colors"
import { isDark } from "../data/colors"
import { familyById } from "../data/families"
import { SITE, waLink } from "../lib/site"

export default function ColorDrawer({ color, onClose }: { color: ColorEntry; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState<null | "ok" | "fail">(null)
  const family = familyById(color.family)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    panelRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
      previous?.focus()
    }
  }, [onClose])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(null), 2200)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(color.hex)
      setCopied("ok")
    } catch {
      setCopied("fail")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Tutup detail warna"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40"
        tabIndex={-1}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="warna-judul"
        tabIndex={-1}
        className="relative flex h-full w-full max-w-[440px] flex-col border-l border-line bg-paper outline-none"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="meta">Detail warna</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="btn btn-quiet h-11 w-11 p-0"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div
            className="flex h-44 items-end justify-between p-4"
            style={{ backgroundColor: color.hex }}
          >
            <span
              className="tabular-nums text-sm font-medium"
              style={{ color: isDark(color.hex) ? "#ffffff" : "#17181a" }}
            >
              {color.hex}
            </span>
            <span
              className="tabular-nums text-xs"
              style={{ color: isDark(color.hex) ? "#ffffff" : "#17181a" }}
            >
              {color.code}
            </span>
          </div>

          <div className="px-5 py-6">
            <h2 id="warna-judul" className="text-2xl font-semibold tracking-tight text-ink">
              {color.name}
            </h2>
            <p className="meta mt-2">
              {family.label} / kode {color.code}
            </p>

            <dl className="mt-6 border-t border-line text-sm">
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Lini produk</dt>
                <dd className="text-right font-medium text-ink">{family.label}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Kode warna</dt>
                <dd className="tabular-nums text-right text-ink">{color.code}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Nilai hex</dt>
                <dd className="tabular-nums text-right text-ink">{color.hex}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-2.5">
                <dt className="text-muted">Kemasan</dt>
                <dd className="text-right font-medium text-ink">{family.sizes.join(" / ")}</dd>
              </div>
            </dl>

            <div className="mt-6 space-y-2">
              <a
                href={waLink(
                  `Halo ${SITE.short}, saya ingin meminta sampel warna ${color.name} (${family.label} ${color.code}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <WhatsappLogo size={18} weight="fill" aria-hidden />
                Minta sampel warna ini
              </a>
              <button type="button" onClick={copyHex} className="btn btn-quiet w-full">
                {copied === "ok" ? (
                  <>
                    <Check size={16} weight="bold" aria-hidden />
                    Hex tersalin
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden />
                    Salin nilai hex
                  </>
                )}
              </button>
              <a href={family.pdf} download className="btn btn-quiet w-full">
                <DownloadSimple size={16} aria-hidden />
                Unduh TDS {family.label}
              </a>
              {copied === "fail" && (
                <p role="status" className="text-[13px] text-accent">
                  Browser menolak akses clipboard. Salin manual: {color.hex}
                </p>
              )}
            </div>

            <p className="mt-5 text-[12px] leading-relaxed text-muted">
              Tampilan warna di layar bisa berbeda dari hasil cat. Cocokkan dengan sampel
              fisik sebelum membeli dalam jumlah besar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
