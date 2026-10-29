import type { FamilyId } from "./families"

export interface ColorEntry {
  name: string
  hex: string
  code: string
  family: FamilyId
  group: string
  brightness: "Terang" | "Sedang" | "Gelap"
}

type Raw = [name: string, hex: string, code: string]

const RAW: Record<FamilyId, Raw[]> = {
  "t-luc": [
    ["Daisy White", "#FFFBBB", "100"],
    ["Apple White", "#FFD47D", "101"],
    ["Crepe Peach", "#F0AD82", "102"],
    ["Pastry Puff", "#B78347", "103"],
    ["Salmon", "#FFBFA6", "104"],
    ["Rosy Pink", "#FFB4AF", "105"],
    ["Light Pink", "#FF9994", "106"],
    ["Jasmine", "#FEBC44", "107"],
    ["Light Gingerly", "#D66A21", "108"],
    ["Sunset", "#FF9648", "109"],
    ["Tangerine", "#B95E3F", "110"],
    ["Paris Green", "#82D65C", "111"],
    ["Green Freeway", "#72C482", "112"],
    ["Ice Blue", "#00D3CD", "113"],
    ["Victoria", "#009991", "114"],
    ["Tiara", "#6E7AA4", "115"],
    ["Steely Grey", "#474747", "116"],
    ["Ocean Blue", "#3D6684", "117"],
    ["Arctic Blue", "#1F9DB3", "118"],
    ["Carotine", "#FF411D", "119"],
    ["Salem", "#F29F5B", "120"],
    ["Regent Grey", "#878787", "121"],
    ["Rose Cherry", "#D06F8E", "122"],
    ["Scarlet", "#82425A", "123"],
    ["Inky Fancy", "#494077", "124"],
    ["Raspberry Crush", "#FF1E00", "125"],
    ["Ski Valley", "#FFBC01", "126"],
    ["Island Kiwi", "#95AF44", "127"],
    ["Park Avenue", "#00D054", "128"],
    ["Sweet Celery", "#47A547", "129"],
  ],
  "dry-seal": [
    ["Transparent", "#F0F0F0", "711"],
    ["White", "#FFFFFF", "712"],
    ["Cotton Cream", "#F7EFE7", "710"],
    ["Athene", "#F1D9BD", "701"],
    ["Sandstone", "#D9C7B9", "703"],
    ["Darkstone", "#D3BFA3", "705"],
    ["Carita", "#F9CB87", "715"],
    ["Walnut Brown", "#685022", "719"],
    ["Earthy Oak", "#3C2210", "714"],
    ["Tea Leaf Green", "#DDCD76", "720"],
    ["Grey Pearl", "#7E7E74", "721"],
    ["Iron Grey", "#BFC7CD", "709"],
    ["Warm Ash", "#A5A5A5", "716"],
    ["Obsidian Dust", "#788183", "717"],
    ["Industrial Ash", "#646C70", "707"],
    ["Volcanic Ash", "#4A5254", "708"],
    ["Sage Green", "#C9E1B7", "718"],
    ["Emerald", "#007040", "704"],
    ["Royal Sapphire", "#1C54A7", "702"],
    ["Timeless Maroon", "#832824", "706"],
    ["Black", "#221E20", "713"],
  ],
  "pedia-luc": [
    ["Lily White", "#FEEB9C", "201"],
    ["Salem", "#FFABAB", "202"],
    ["Cream", "#FFE294", "203"],
    ["Durian Yellow", "#FFEE82", "204"],
    ["Valentine", "#F7C7BB", "205"],
    ["Violet", "#E3D6F4", "206"],
    ["Sky Blue", "#D0E8E8", "207"],
    ["Arctic Blue", "#91CCF8", "208"],
    ["Silver Grey", "#E4D0AD", "209"],
    ["Deep Yellow", "#FFDC4A", "210"],
    ["Gerbera", "#FBAD6F", "211"],
    ["Sunset", "#D6785F", "212"],
    ["Fresh Green", "#BCEABC", "213"],
    ["Pacific Blue", "#5AA6E4", "214"],
    ["Ocean Blue", "#4F88CB", "215"],
    ["Smoked Grey", "#7C7974", "216"],
    ["Ice Green", "#D6F1EA", "217"],
    ["Shiny Blue", "#ACECEC", "218"],
    ["Baby Pink", "#FEB6B7", "219"],
    ["Sweet Green", "#DEEEC9", "220"],
    ["Light Grey", "#B9BDBE", "221"],
    ["Light Blue", "#D2E9F7", "222"],
    ["Citrus Green", "#D7D38A", "223"],
    ["Peach Salem", "#F7AB94", "224"],
    ["Lime Green", "#D9EE61", "225"],
    ["Banana Green", "#B1CA93", "226"],
  ],
}

export function rgbOf(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }
}

export function luminance(hex: string) {
  const { r, g, b } = rgbOf(hex)
  return (r * 299 + g * 587 + b * 114) / 1000
}

export function isDark(hex: string) {
  return luminance(hex) < 140
}

function hueGroup(hex: string) {
  const { r, g, b } = rgbOf(hex)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min
  if (delta < 24) return "Netral"

  let hue: number
  if (max === r) hue = 60 * (((g - b) / delta) % 6)
  else if (max === g) hue = 60 * ((b - r) / delta + 2)
  else hue = 60 * ((r - g) / delta + 4)
  if (hue < 0) hue += 360

  if (hue < 14 || hue >= 340) return "Merah"
  if (hue < 42) return "Oranye"
  if (hue < 68) return "Kuning"
  if (hue < 165) return "Hijau"
  if (hue < 255) return "Biru"
  if (hue < 320) return "Ungu"
  return "Pink"
}

function brightnessOf(hex: string): ColorEntry["brightness"] {
  const value = luminance(hex)
  if (value < 80) return "Gelap"
  if (value < 170) return "Sedang"
  return "Terang"
}

export const COLORS: ColorEntry[] = (Object.keys(RAW) as FamilyId[]).flatMap((family) =>
  RAW[family].map(([name, hex, code]) => ({
    name,
    hex,
    code,
    family,
    group: hueGroup(hex),
    brightness: brightnessOf(hex),
  })),
)

export const GROUP_ORDER = ["Netral", "Merah", "Oranye", "Kuning", "Hijau", "Biru", "Ungu", "Pink"]

export const GROUPS = GROUP_ORDER.map((name) => ({
  name,
  count: COLORS.filter((color) => color.group === name).length,
})).filter((group) => group.count > 0)

export const BRIGHTNESS = ["Terang", "Sedang", "Gelap"] as const
