// created variable to hold the value of kelvin
const kelvin = 293;
// created variable to hold the value of celsius
const celsius = kelvin - 273;
// created variable to hold the value of fahrenheit
 let fahrenheit = celsius * (9/5) + 32;
 // Used the .floor() method from the built-in Math object to round down the Fahrenheit temperature. 
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)