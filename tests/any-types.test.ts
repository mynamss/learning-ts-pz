describe('Any Data Type', () => {
    it('should support in TypeScript', () => {
        
        const profile: any = {
            id: 1,
            name: "Udin Seworld",
            age: 23
        }

        profile.hobbies = "Football"
        profile.age = 24

        console.info(profile)
    });
});