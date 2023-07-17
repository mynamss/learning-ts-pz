describe("Alias Type", () => {
    it("should success", () => {
        const category = {
            id: "LP",
            name: "Laptop",
        };
        const product = {
            id: "A123",
            name: "Asus Vivobook",
            price: 123456789,
            category: category,
        };
        console.log(category);
        console.log(product);
    });
    // Test untuk Alias + Union
    it("should get result", () => {
        const isExist = 1;
        const food = {
            id: 1,
            name: "Wortel",
            price: 5000,
            isExist: isExist,
        };
        console.log(food);
    });
});
export {};
