import { useId, useRef, useState } from "react"
import { Clock, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react"
import { PRODUCTS } from "../data/products"
import { SITE, waLink } from "../lib/site"

interface Errors {
  name?: string
  phone?: string
}

export default function Contact() {
  const formId = useId()
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [sentTo, setSentTo] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const product = String(data.get("product") ?? "")
    const message = String(data.get("message") ?? "").trim()

    const nextErrors: Errors = {}
    if (name.length < 2) nextErrors.name = "Isi nama minimal 2 karakter."
    if (phone.replace(/\D/g, "").length < 8) {
      nextErrors.phone = "Isi nomor yang bisa dihubungi, minimal 8 angka."
    }
    setErrors(nextErrors)

    if (nextErrors.name) {
      nameRef.current?.focus()
      return
    }
    if (nextErrors.phone) {
      phoneRef.current?.focus()
      return
    }

    const lines = [
      "Halo WKA, saya ingin meminta penawaran.",
      "",
      `Nama: ${name}`,
      `Telepon/WhatsApp: ${phone}`,
      `Produk: ${product || "Belum ditentukan"}`,
    ]
    if (message) lines.push("", `Kebutuhan: ${message}`)

    const href = waLink(lines.join("\n"))
    setSentTo(href)
    window.open(href, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="kontak" className="border-t border-line py-16 lg:py-24">
      <div className="page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-h2 font-semibold text-ink">Minta penawaran.</h2>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-soft">
            Sebutkan produk, volume, dan lokasi proyek. Tim kami membalas pada jam kerja.
          </p>

          <dl className="mt-9 space-y-5 text-sm">
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-muted" aria-hidden />
              <div>
                <dt className="meta">Telepon</dt>
                <dd className="mt-1">
                  <a className="link-underline inline-flex min-h-11 items-center text-ink" href={`tel:+${SITE.phoneIntl}`}>
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-muted" aria-hidden />
              <div>
                <dt className="meta">Email</dt>
                <dd className="mt-1">
                  <a className="link-underline inline-flex min-h-11 items-center text-ink" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-muted" aria-hidden />
              <div>
                <dt className="meta">Alamat</dt>
                <dd className="mt-1 text-ink">{SITE.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-muted" aria-hidden />
              <div>
                <dt className="meta">Jam layanan</dt>
                <dd className="mt-1 text-ink">{SITE.hours}</dd>
              </div>
            </div>
          </dl>

          <a
            href={waLink("Halo WKA, saya ingin bertanya tentang produk cat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-quiet mt-8 w-fit"
          >
            <WhatsappLogo size={18} weight="fill" aria-hidden />
            Chat WhatsApp
          </a>
        </div>

        <div className="border border-line bg-surface p-5 sm:p-7">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor={`${formId}-name`} className="text-[13px] font-semibold text-ink">
                Nama
              </label>
              <input
                ref={nameRef}
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                className="field mt-1.5"
                placeholder="Nama lengkap"
              />
              {errors.name && (
                <p id={`${formId}-name-error`} className="mt-1.5 text-[13px] text-accent">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-phone`} className="text-[13px] font-semibold text-ink">
                Telepon atau WhatsApp
              </label>
              <input
                ref={phoneRef}
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                className="field mt-1.5"
                placeholder="08xx xxxx xxxx"
              />
              {errors.phone && (
                <p id={`${formId}-phone-error`} className="mt-1.5 text-[13px] text-accent">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-product`} className="text-[13px] font-semibold text-ink">
                Produk
              </label>
              <select id={`${formId}-product`} name="product" className="field mt-1.5">
                <option value="">Belum ditentukan</option>
                {PRODUCTS.map((product) => (
                  <option key={product.slug} value={`${product.name} ${product.suffix}`}>
                    {product.name} {product.suffix}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`${formId}-message`} className="text-[13px] font-semibold text-ink">
                Kebutuhan
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={4}
                className="field mt-1.5 resize-y"
                placeholder="Volume, lokasi proyek, atau warna yang dicari"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Kirim lewat WhatsApp
            </button>
            <p className="text-[12px] leading-relaxed text-muted">
              Formulir ini menyusun pesan dan membukanya di WhatsApp. Tidak ada data yang
              disimpan di situs ini.
            </p>

            {sentTo && (
              <div
                role="status"
                className="border border-line bg-paper p-4 text-[13px] leading-relaxed text-ink-soft"
              >
                Pesan sudah disiapkan. Jika WhatsApp tidak terbuka otomatis,{" "}
                <a href={sentTo} target="_blank" rel="noopener noreferrer" className="link-underline font-semibold text-accent">
                  buka tautan ini
                </a>
                .
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
