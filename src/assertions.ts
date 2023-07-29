// Kadang kita tahu tipe data yang digunakan, tapi TS tidak tahu
// Hal ini membuat return akan berupa Any
// Assertion : konversi tipe data menggunakan kata kunci 'as'


export interface University {
    name: string
    city: string
}