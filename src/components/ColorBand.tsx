export function ColorBand({
  colors,
  height = "h-2",
  className = "",
}: {
  colors: string[]
  height?: string
  className?: string
}) {
  return (
    <div aria-hidden className={`flex w-full ${height} ${className}`}>
      {colors.map((color, index) => (
        <span key={`${color}-${index}`} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}
