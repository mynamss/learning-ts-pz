import { Account } from "../src/intersection-type"

describe("Intersection", () => {
  it("should support Intersection Type", () => {
    //   Account dibangun dari 2 interface yang di Intersect, yaitu HasName dan HasBank
    const account: Account = {
      name: "Maulana",
      bankNumber: 245834758346878,
      }
      
      console.info(account)
  })
})
