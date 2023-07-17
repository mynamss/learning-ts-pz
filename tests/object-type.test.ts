describe("Object Type", () => {
  it("should support object type", () => {
    // OBJECT TYPE
    // Untuk mengatasi kasus sederhana, agar tidak membuat Any yang bertele tele
    // Tidak cocok untuk dipakai di banyak tempat

    // implementasi
    const corporate: { id: number; name: string; date: string } = {
      id: 1,
      name: "PT SEJAHTERA SELALU",
      date: "2023-07-16",
    }

    console.info(corporate)

    corporate.name = "PT COBA COBA"
    corporate.date = "2023-01-01"

    //   Error Trigger
    // corporate.active = true
  })
})
