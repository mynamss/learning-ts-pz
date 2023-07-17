describe("Optional Type in TS", () => {
    it("should support optional type bro", () => {
        const student1 = {
            nim: 201920202,
            name: "Aliudin",
            hobbies: "Mancing",
        };
        const student2 = {
            nim: 201921212,
            name: "Maulana",
        };
        const school = {
            name: "SDIT Sekaran 1",
            student: [student1, student2],
        };
        console.log(school);
    });
});
export {};
