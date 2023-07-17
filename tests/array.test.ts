describe("Array Test", () => {
  it("should same with JavaScript", () => {
    // Basic Array 
    const name: string[] = ["Nunung", "Ali", "Maulana"]
    const age: number[] = [20, 21, 22]

    console.info(name)
    console.info(age)

    
  })
  it('should Read Only Array', () => {
    const religion: ReadonlyArray<string> = ["Islam", "Christian", "Buddhist"]

    console.info(religion[0])

    // try to change = error
    // religion[0] = "Catholic"

  });
  it('should Support Tuple', () => {
    // array yang jumlahnya dan tipe data tiap value sudah ditentukan
    const city: readonly [string, number, boolean] = ["Semarang", 2023, true]

    console.info(city[0])
    console.info(city[1])

    // error
    // city[0] = "Bali"
  });
})
