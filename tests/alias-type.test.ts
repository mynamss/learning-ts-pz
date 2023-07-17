import { Category, Food, Product, isExist } from "../src/alias-type"

describe("Alias Type", () => {
  it("should success", () => {
    const category: Category = {
      id: "LP",
      name: "Laptop",
    }

    const product: Product = {
      id: "A123",
      name: "Asus Vivobook",
      price: 123456789,
      category: category,
    }

    console.log(category)
    console.log(product)
  })

  // Test untuk Alias + Union
  it("should get result", () => {
    const isExist: isExist = 1

    const food: Food = {
      id: 1,
      name: "Wortel",
      price: 5000,
      isExist: isExist,
    }

    console.log(food)
  })
})
