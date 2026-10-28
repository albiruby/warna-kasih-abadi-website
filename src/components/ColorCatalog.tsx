import { useState } from 'react'

interface ColorSwatch {
  name: string
  hex: string
  code: string
}

const COLOR_FAMILIES: Record<string, ColorSwatch[]> = {
  'T-LUC': [
    { name: 'Daisy White', hex: '#FFFBBB', code: '100' },
    { name: 'Apple White', hex: '#FFD47D', code: '101' },
    { name: 'Crepe Peach', hex: '#F0AD82', code: '102' },
    { name: 'Pastry Puff', hex: '#B78347', code: '103' },
    { name: 'Salmon', hex: '#FFBFA6', code: '104' },
    { name: 'Rosy Pink', hex: '#FFB4AF', code: '105' },
    { name: 'Light Pink', hex: '#FF9994', code: '106' },
    { name: 'Jasmine', hex: '#FEBC44', code: '107' },
    { name: 'Light Gingerly', hex: '#D66A21', code: '108' },
    { name: 'Sunset', hex: '#FF9648', code: '109' },
    { name: 'Tangerine', hex: '#B95E3F', code: '110' },
    { name: 'Paris Green', hex: '#82D65C', code: '111' },
    { name: 'Green Freeway', hex: '#72C482', code: '112' },
    { name: 'Ice Blue', hex: '#00D3CD', code: '113' },
    { name: 'Victoria', hex: '#009991', code: '114' },
    { name: 'Tiara', hex: '#6E7AA4', code: '115' },
    { name: 'Steely Grey', hex: '#474747', code: '116' },
    { name: 'Ocean Blue', hex: '#3D6684', code: '117' },
    { name: 'Arctic Blue', hex: '#1F9DB3', code: '118' },
    { name: 'Carotine', hex: '#FF411D', code: '119' },
    { name: 'Salem', hex: '#F29F5B', code: '120' },
    { name: 'Regent Grey', hex: '#878787', code: '121' },
    { name: 'Rose Cherry', hex: '#D06F8E', code: '122' },
    { name: 'Scarlet', hex: '#82425A', code: '123' },
    { name: 'Inky Fancy', hex: '#494077', code: '124' },
    { name: 'Raspberry Crush', hex: '#FF1E00', code: '125' },
    { name: 'Ski Valley', hex: '#FFBC01', code: '126' },
    { name: 'Island Kiwi', hex: '#95AF44', code: '127' },
    { name: 'Park Avenue', hex: '#00D054', code: '128' },
    { name: 'Sweet Celery', hex: '#47A547', code: '129' },
  ],
  'DRY SEAL': [
    { name: 'Transparent', hex: '#F0F0F0', code: '711' },
    { name: 'White', hex: '#FFFFFF', code: '712' },
    { name: 'Cotton Cream', hex: '#F7EFE7', code: '710' },
    { name: 'Athene', hex: '#F1D9BD', code: '701' },
    { name: 'Sandstone', hex: '#D9C7B9', code: '703' },
    { name: 'Darkstone', hex: '#D3BFA3', code: '705' },
    { name: 'Carita', hex: '#F9CB87', code: '715' },
    { name: 'Walnut Brown', hex: '#685022', code: '719' },
    { name: 'Earthy Oak', hex: '#3C2210', code: '714' },
    { name: 'Tea Leaf Green', hex: '#DDCD76', code: '720' },
    { name: 'Grey Pearl', hex: '#7E7E74', code: '721' },
    { name: 'Iron Grey', hex: '#BFC7CD', code: '709' },
    { name: 'Warm Ash', hex: '#A5A5A5', code: '716' },
    { name: 'Obsidian Dust', hex: '#788183', code: '717' },
    { name: 'Industrial Ash', hex: '#646C70', code: '707' },
    { name: 'Volcanic Ash', hex: '#4A5254', code: '708' },
    { name: 'Sage Green', hex: '#C9E1B7', code: '718' },
    { name: 'Emerald', hex: '#007040', code: '704' },
    { name: 'Royal Sapphire', hex: '#1C54A7', code: '702' },
    { name: 'Timeless Maroon', hex: '#832824', code: '706' },
    { name: 'Black', hex: '#221E20', code: '713' },
  ],
  'Pedia-Luc': [
    { name: 'Lily White', hex: '#FEEB9C', code: '201' },
    { name: 'Salem', hex: '#FFABAB', code: '202' },
    { name: 'Cream', hex: '#FFE294', code: '203' },
    { name: 'Durian Yellow', hex: '#FFEE82', code: '204' },
    { name: 'Valentine', hex: '#F7C7BB', code: '205' },
    { name: 'Violet', hex: '#E3D6F4', code: '206' },
    { name: 'Sky Blue', hex: '#D0E8E8', code: '207' },
    { name: 'Arctic Blue', hex: '#91CCF8', code: '208' },
    { name: 'Silver Grey', hex: '#E4D0AD', code: '209' },
    { name: 'Deep Yellow', hex: '#FFDC4A', code: '210' },
    { name: 'Gerbera', hex: '#FBAD6F', code: '211' },
    { name: 'Sunset', hex: '#D6785F', code: '212' },
    { name: 'Fresh Green', hex: '#BCEABC', code: '213' },
    { name: 'Pacific Blue', hex: '#5AA6E4', code: '214' },
    { name: 'Ocean Blue', hex: '#4F88CB', code: '215' },
    { name: 'Smoked Grey', hex: '#7C7974', code: '216' },
    { name: 'Ice Green', hex: '#D6F1EA', code: '217' },
    { name: 'Shiny Blue', hex: '#ACECEC', code: '218' },
    { name: 'Baby Pink', hex: '#FEB6B7', code: '219' },
    { name: 'Sweet Green', hex: '#DEEEC9', code: '220' },
    { name: 'Light Grey', hex: '#B9BDBE', code: '221' },
    { name: 'Light Blue', hex: '#D2E9F7', code: '222' },
    { name: 'Citrus Green', hex: '#D7D38A', code: '223' },
    { name: 'Peach Salem', hex: '#F7AB94', code: '224' },
    { name: 'Lime Green', hex: '#D9EE61', code: '225' },
    { name: 'Banana Green', hex: '#B1CA93', code: '226' },
  ],
}

const FAMILY_KEYS = Object.keys(COLOR_FAMILIES)

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000
}

export default function ColorCatalog() {
  const [activeFamily, setActiveFamily] = useState('Semua')
  const [hovered, setHovered] = useState<string | null>(null)

  const swatches =
    activeFamily === 'Semua'
      ? Object.values(COLOR_FAMILIES).flat()
      : COLOR_FAMILIES[activeFamily] ?? []

  return (
    <section id="colors" className="py-24 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#EA580C] rounded-full text-sm font-semibold mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            Katalog Warna
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1F2937] mb-4">
            Pilihan Warna Resmi WKA
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Temukan warna sempurna untuk hunian Anda dari koleksi resmi T-LUC dan Pedia-Luc.
            Arahkan kursor ke swatch untuk melihat nama dan kode warna.
          </p>
        </div>

        {/* Family filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Semua', ...FAMILY_KEYS].map(family => (
            <button
              key={family}
              onClick={() => setActiveFamily(family)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFamily === family
                  ? 'bg-[#EA580C] text-white shadow-md shadow-orange-200'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {family === 'Semua' ? 'Semua Produk' : family}
              {family !== 'Semua' && (
                <span className="ml-2 text-[10px] opacity-70">
                  ({COLOR_FAMILIES[family].length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Swatch grid */}
        <div
          className="grid gap-2.5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
        >
          {swatches.map(swatch => {
            const dark = luminance(swatch.hex) < 140
            const isHovered = hovered === swatch.code
            return (
              <div
                key={swatch.code}
                onMouseEnter={() => setHovered(swatch.code)}
                onMouseLeave={() => setHovered(null)}
                className="aspect-square rounded-xl cursor-pointer relative overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-xl border border-black/5"
                style={{ backgroundColor: swatch.hex }}
                title={`${swatch.name} · ${swatch.code}`}
              >
                {/* Code label always visible at bottom */}
                {!isHovered && (
                  <div
                    className="absolute bottom-0 left-0 right-0 py-1 text-center text-[9px] font-bold"
                    style={{
                      backgroundColor: dark ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.55)',
                      color: dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.65)',
                    }}
                  >
                    {swatch.code}
                  </div>
                )}

                {/* Hover overlay with full name */}
                {isHovered && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-1.5"
                    style={{ backgroundColor: dark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.82)' }}
                  >
                    <span
                      className="text-[9px] font-bold text-center leading-tight"
                      style={{ color: dark ? '#fff' : '#111' }}
                    >
                      {swatch.name}
                    </span>
                    <span
                      className="text-[8px] mt-0.5 font-semibold"
                      style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)' }}
                    >
                      #{swatch.code}
                    </span>
                    <span
                      className="text-[7px] mt-0.5 font-mono"
                      style={{ color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}
                    >
                      {swatch.hex}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 mb-6">
            {swatches.length} warna ditampilkan · Tersedia dalam kemasan 1kg, 5kg, dan 20kg
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#dd231a] to-[#ee2e25] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Minta Sampel Warna Gratis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
