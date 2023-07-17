// INTERFACE for varaible
// Interface = cara lain deklarasi data selain 'type'
// Bisa dikembangkan dengan mudah daripada type
// Digunakan untuk tipe data dan program yang kompleks
// Saat di kompile ke Js, interface akan hilang

// READONLY Property
// Jika sebuah variable / attr ditambah ini, maka isinya tidak bisa diubah lagi setelah diisi pertama kali

// INTERFACE Function
// memudahkan dalam membuat variable yang berisi function

// interface example
export interface President {
    id: number
    name: string
    address?: string
    // readonly example
    readonly nip: string
    readonly gender: string
}

// interface function
interface addFunction {
    (input1: number, input2: number): number
}

export let sumNum: addFunction = (input1:number, input2) => {
    return input1 + input2
}