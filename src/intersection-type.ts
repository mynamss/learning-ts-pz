// Cara membuat tipe data baru dengan menggabungkan dua tipe data lain
// Cocok jika tidak bisa extends di interface
// Cara buat : menggunakan kata kunci '&' (dan)

interface HasName {
    name: string
}

interface HasBank {
    bankNumber: number
}

export type Account = HasName & HasBank