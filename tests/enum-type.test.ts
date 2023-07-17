import { SubscripeType, User } from "../src/enum-type"

describe("Enum Type", () => {
  it("should support Enum Type", () => {
    const user: User = {
      id: 111,
      name: "newUser123",
      type: SubscripeType.SUBSCRIBE,
    }

    console.info(user)
  })
})

// Lanjut : 1:27:30
