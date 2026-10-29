export type FamilyId = "t-luc" | "pedia-luc" | "dry-seal"

export interface Family {
  id: FamilyId
  label: string
  description: string
  sizes: string[]
  pdf: string
}

export const FAMILIES: Family[] = [
  {
    id: "t-luc",
    label: "T-LUC",
    description: "Cat emulsi interior dan eksterior dengan daya tutup tinggi.",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS T-Luc.pdf",
  },
  {
    id: "pedia-luc",
    label: "Pedia-Luc",
    description: "Cat emulsi serbaguna yang cepat kering untuk semua permukaan.",
    sizes: ["1 kg", "5 kg", "25 kg"],
    pdf: "/TDS Pedia-Luc.pdf",
  },
  {
    id: "dry-seal",
    label: "DRY SEAL",
    description: "Pelapis kedap air fleksibel untuk area rawan bocor.",
    sizes: ["1 kg", "4 kg", "20 kg"],
    pdf: "/TDS Dry Seal.pdf",
  },
]

export function familyById(id: FamilyId): Family {
  const family = FAMILIES.find((item) => item.id === id)
  if (!family) throw new Error(`Unknown family: ${id}`)
  return family
}
