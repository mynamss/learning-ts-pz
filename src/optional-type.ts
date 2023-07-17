// Tidak semua atribut wajib di isi
// Caranya dengan enambahakan tanda tanya (?)
//  '?' menandakan sebagai optional

export type Student = {
  nim: number
  name: string
  hobbies?: string
}

export type School = {
  name: string
  student: object[]
  description?: string
}
