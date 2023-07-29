import { Employee, Manager } from "../src/extend-interface"
import { President, sumNum } from "../src/interface"

describe("Interface in TS", () => {
  // Imterface and Readonly
  it("should same output with Any", () => {
    const president: President = {
      id: 1,
      name: "Joko Widodo",
      // readonly here
      gender: "Laki laki",
      nip: "0932748545647",
    }

    // Error Trigger
    // president.nip = "29837482675384"
    console.info(president)
  })

  // Interface Function
  it("should support Interface Function", () => {
    let result = sumNum(2, 4)
    console.info(result)

    expect(sumNum(2, 5)).toBe(7)
  })

  it("should support Indexable Interface", () => {
    // membuat index/key dan value berisi sesuai tipe datanya
    interface stringArray {
      [index: number]: string
    }

    const country: stringArray = ["Indonesia", "Japan", "Brazil"]
    console.info(country)
  })

  it("should support Index Interface for non-number index", () => {
    interface stringBook {
      [key: string]: string
    }

    const book: stringBook = {
      name: "Menjadi Programmer",
      writter: "Solehudin",
    }

    expect(book.name).toBe("Menjadi Programmer")
    expect(book.writter).toBe("Solehudin")
  })

  // EXTEND INTERFACE
  it("should support Extend Interface", () => {
    const employee: Employee = {
      id: 124,
      name: "Meta",
      division: "IT",
      active: true,
    }

    const manager: Manager = {
      id: 222,
      name: "Udin",
      division: "PM",
      active: true,
      numberOfEmployee: 10,
    }

    console.info(employee)
    console.info(manager)
  })

  it("should support Function in Interface", () => {
    interface Person {
      name: string
      greetings(name: string): string
    }

    const person: Person = {
      name: "Ali",
      greetings: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`
      },
    }

    console.info(person.greetings("Slamet"))
  })
})
