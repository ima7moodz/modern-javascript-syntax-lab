console.log("Exercise 1: Applying Array.prototype.map()")
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numsByTwo = nums.map((byTwo) => {
  return byTwo * 2
})

console.log(numsByTwo)

console.log("Exercise 2: Array destructuring")
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here

const [firstTopping, secondTopping] = pizzaToppings

console.log(firstTopping)
console.log(secondTopping)

console.log("Exercise 3: Destructuring objects")
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
}

// Your code here

const { make, model } = car

console.log(make)
console.log(model)

console.log("Exercise 4: Applying the spread operator on arrays")
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)

console.log("Exercise 5: Applying the spread operator on objects")
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car }

myCar.model = "q7"

console.log("Mar", car)
console.log("My Car", myCar)

console.log("Exercise 6: Dynamic keys in objects")
// Create an object named userProfile.

// Define a variable named propertyName and assign a string to it (like a username, age, or email).

// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const username = "username"
const age = "age"
const email = "email"

const userProfile = {
  [username]: "Imahmood",
  [age]: 24,
  [email]: "imahmoodi@outlook.com",
}
console.log(userProfile)

console.log("Exercise 8: Default parameters")
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

const nounAndAdjective = (noun = "cat", adjective = "white") => {
  console.log(`The ${noun} is ${adjective}`)
}

nounAndAdjective()

console.log("Exercise 9: Ternary operator")
// Convert the following `if...else` statement in to a ternary:

let pizza = "Not good"

// if (pizza === "tasty") {
//   console.log("yum")
// } else {
//   console.log("yuck")
// }

// Your code here

pizza === "tasty" ? console.log("yum") : console.log("yuck")

console.log("Exercise 10: Boolean gates")
// In modern JavaScript, a common pattern is to assign a default value to variables if no specific value is provided. This technique is especially useful in settings where configurations might be optional. For example, users might not set their language or theme preferences on a website, and you’d want to fall back to some default settings.

// Now that you’ve seen how to assign default values using the logical OR operator, let’s reinforce this concept with a direct application.

// Let’s assume we have a variable called localLangConfig that might contain a language code (like ‘es’ for Spanish, ‘fr’ for French) or might be null if no language is selected
// Your task is to create a variable LANG that should use the value from localLangConfig if it’s not null. If localLangConfig is null, default LANG to ‘en’ (English).
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || "en"
// Log the result
console.log("Language setting:", LANG)

//Now, let’s try this same pattern for setting a users website theme.

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || "light"
// Log the result
console.log("User theme setting:", USER_THEME)

console.log("Exercise 11: Optional chaining")
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: "Alice",
}

let cat = adventurer.cat?.cat

console.log(cat)
