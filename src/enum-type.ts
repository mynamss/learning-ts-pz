// Enum : tipe data yang nilanya sudah pasti
// Tidak dimiliki oleh javascript
// By default, akan dikonversi ke number di JS
// Untuk output string, maka harus menambahkan sama dengan "="

export enum SubscripeType {
  SUBSCRIBE = "SUBSCRIBE",
  TRIAL = "TRIAL",
  LIFETIME = "LIFETIME",
}

export type User = {
  id: number
  name: string
  type: SubscripeType
}
