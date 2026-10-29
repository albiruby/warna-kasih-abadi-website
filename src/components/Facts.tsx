const FACTS = [
  { value: "2020", label: "Berdiri di Bogor" },
  { value: "3", label: "Lini produk" },
  { value: "77", label: "Kode warna" },
  { value: "3", label: "TDS siap unduh" },
]

export default function Facts() {
  return (
    <section aria-label="Data singkat perusahaan" className="border-b border-line bg-surface">
      <dl className="page grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-line">
        {FACTS.map((fact) => (
          <div key={fact.label} className="px-0 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <dd className="text-3xl font-semibold tracking-tight text-ink">{fact.value}</dd>
            <dt className="mt-1 text-[13px] text-muted">{fact.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
