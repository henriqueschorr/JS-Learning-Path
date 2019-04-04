//https://app.pluralsight.com/player?course=javascript-fundamentals&author=mark-zamoyta&name=7fd01ceb-4f51-4f08-a2b7-224eb67e01ec&clip=1
//Language Features
//--------------------------------------------------------------------------------------------------------------------------------------
//Rest Parameters
// console.log('Rest Parameters')
// function printParameters(...restParameters){
//     restParameters.forEach( id => console.log(id))
// }

// printParameters(1,2,3)

// //Destructuring Arrays
// console.log('Destructuring Arrays')
// let carIds = [1,2,5,6];

// [car1, car2, car3, ...theRest] = carIds

// console.log(car1, car2, car3, theRest)

// //Destructuring Objects
// console.log('Destructuring Objects')
// let car = { id: 5000, style: 'Convertible' };

// ({ id, style } = car) //Can use Let so don't need ()

// console.log( id, style)

// //Spread Syntax
// console.log('Spread Syntax')
// function startCars(car1, car2, car3){
//     console.log(car1, car2, car3)
// }

// startCars(...carIds) //It can use arrays...

// let carCodes = 'abc'

// startCars(...carCodes) //... and Strings

// //Conversion
// console.log('Conversion')
// let number = 5
// console.log( typeof(toString(number)))
// console.log( typeof(Number.parseInt(toString(number))))

//Functions and Scope
//--------------------------------------------------------------------------------------------------------------------------------------

//Function Scope
// function startCar(carId){
//     let message = 'Starting...'
//     let startFn = function turnKey(){
//         let message = 'Override'
//         //If message was not declared here, it would print 'Starting...'
//         console.log(message)    
//     }
//     startFn()
//     console.log(message)
// }

// startCar()

//It will throw an error since message is declared inside the function only
//console.log(message)

//Block Scope
// if (5 === 5){
//     var message = 'Equal2'
// }

// if (5 === 5){
//     let message = 'Equal'
// }
// console.log(message)

//IIFE's / Closure
// let app = (function(){
//     let carId = 123;
//     let getId = function(){
//         return carId
//     }
//     return {
//         getId: getId
//     }
// })()

// console.log(app.getId())

//CALL and APPLY-> Changing context of an object
//Call a function of an object and changes the THIS value
//BIND
// let obj = {
//     carId: 123,
//     getId: function(prefix){
//         return prefix + this.carId
//     }
// }

// let newCar = { carId: 456 }
// let newFn = obj.getId.bind(newCar) //Bind a function of an object, changing the THIS reference, like CALL and APPLY
// console.log( newFn() )
// console.log( obj.getId.apply(newCar, ['ID: '])) //Apply pass parameter ID for the prefix in function getId

//Arrow Functions
//Does not have their own THIS value
// let getId = (prefix, suffix) => prefix + 123 + suffix

// let getIdEx = (prefix, suffix) => {
//     carId = 456
//     return prefix + carId + suffix
// }

// console.log( getId('ID: ', '!') )
// console.log( getIdEx('ID: ', '!') )

//Default Parameters
//It must be declared at the end(right) of the paramters list
// let trackCar = (carId, city='NY') => {
//     console.log(`Tracking ${carId} in ${city}.`)
// }
// trackCar(123)
// trackCar(123, 'Imbé')

//Objects and Arrays
//--------------------------------------------------------------------------------------------------------------------------------------

//Constructor Functions
// function Car(id){
//     this.carId = id;
//     this.start = function(){
//         console.log(this.carId)
//     }
// }

// let car = new Car(123)
// car.start()

//Prototypes
//If you declare a Function inside a Constructor Function, you will create this function xTimes objects created: 100 objects = x100 functions
// function Car(id){
//     this.carId = id
// }

// Car.prototype.start = function(){
//     console.log( this.carId )
// }

// let car = new Car(123)
// car.start()

// String.prototype.hello = function(){
//     return this.toString() + ' Hello'
// }
// console.log('Foo'.hello())

//JSON
//Converting object to String
// let car = {
//     id: 123,
//     style: 'convertible'
// }
// console.log( JSON.stringify(car) )

// //Converting array to String
// let carIds = [
//     { carId: 123 },
//     { carId: 456 },
//     { carId: 789 }
// ]
// console.log( JSON.stringify(carIds) )

//Parsing JSON
// let jsonIn = 
// `
//     [
//         {"carId" : 123},
//         {"carId" : 456},
//         {"carId" : 789}
//     ]
// `;

// let carIds = JSON.parse(jsonIn)
// console.log(carIds)

//Array Filter
// let carIds = [
//     { carId: 123, style: 'sedan' },
//     { carId: 456, style: 'convertible' },
//     { carId: 789, style: 'hatch' }
// ]

// let convertibles = carIds.filter(
//     car => car.style === 'convertible'
// )
// console.log(convertibles)

// //Array Testing/Validating
// let result = carIds.every(
//     car => car.carId > 0
// )
// console.log(result)

// //Loop
// carIds.forEach(
//     (car, index) => console.log(car.carId, index)
// )

// //Find first match
// let car = carIds.find(
//     car => car.carId > 500
// )
// console.log(car)

year = 1956

console.log(window.year)