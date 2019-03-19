console.log("connected")

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctor = (name, speciality, address) => {
        return {
                name: name,
                speciality: speciality,
                address: address
        }
}

const ozz = doctor("Ozz", "Psycology", "124 Any Street")
console.log(ozz)


// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const pet = (petName, petBreed) => {
        return {
                name: petName,
                breed: petBreed
        }
}
const dog = pet("Sharky", "Shark Dog")
const cat = pet("Eek", "cat")
const fish = pet("Fluffy", "Goldfish")
console.log(dog, cat, fish)
const BowWowKennels = []
BowWowKennels.push(dog, cat, fish)
console.log(BowWowKennels)