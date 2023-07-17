// Saat pakai '?' (Optional type) pada variable / parameter, otomatis data bisa "undefined"
// Kadang ingin mengirimkan nilai null, hal ini bisa dilakukan
// Optional type hanya menerima nilai yang ada dan undefined
// Jika pakai null, sudah dianggap tipe data lagi
// Sehingga harus menambahkan null pada deklarasi tipe data


export function sayHi(name?: string|null) {
    if (name) {
        console.info(`Hello ${name}`)
    } else {
        console.info(`Hello everybody`)
    }
}