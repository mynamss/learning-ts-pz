// Function di TS
// parameter dan return : harus + tipe data

// contoh basic function
function yourName(name: string): string {
  return `Your name is ${name}`
}

// contoh function default parameter
function myAge(age: number = 20): string {
  return `Your age is ${age}`
}

// contoh rest param
function sum(...values: number[]): number {
  let total = 0
  for (const value of values) {
    total += value
  }
  return total
}

// contoh optioanl param
function fullName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : `${firstName}`
}

// Function Overloading
// kemampuan membuat function dengan nama yang sama namun dnegan param yang bebreda
function outputByDateType(value: number): number
function outputByDateType(value: string): string
function outputByDateType(value: any): any {
  if (typeof value === "string") {
    return value.toUpperCase()
  } else if (typeof value === "number") {
    return value + 100
  }
}
