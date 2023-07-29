import { University } from "../src/assertions"

describe('Assertions Type', () => {
    it('should support assertions type TS', () => {
        // Normal
        const university: any = {
            name: "Universitas Negeri Tekotok",
            faculty: 8
        }

        // use assertions 
        const university2: University = university as University


        // Error Trigger
        // university2.faculty

        console.info(university2)
    });
});