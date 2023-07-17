export type Category = {
    id: string
    name : string
}

export type Product = {
    id: string
    name: string
    price: number
    category: Category
}

// Alias type dipakai bersamaan dengan Union Type
export type isExist = boolean | number

export type Food = {
    id: number
    name: string
    price: number
    isExist: isExist   //pakai di sini
}