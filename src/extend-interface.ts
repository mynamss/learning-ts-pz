// EXTENDING INTERFACE
// Interface bisa melanjutkan ke interface lain
// Otomatis, atribut interface yang dilanjutkan dimiliki juga oleh interface tersebut
// Memudahkan untuk membuat tipe data yang kompleks

export interface Employee {
    id: number
    name: string
    division: string
    active: boolean
}

export interface Manager extends Employee {
    numberOfEmployee: number
}