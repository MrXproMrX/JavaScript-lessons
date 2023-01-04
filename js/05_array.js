const cars = ['Мазда','Форд','БМВ','Мерседс']
// const people = [
//     {name:'Marat', budget: 250000},
//     {name:'Maxsim', budget: 200000},
//     {name:'Victoria', budget: 150000}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Рено');
// cars.unshift('Волга')
// const firsCar = cars.shift()
// const lastCar = cars.pop()

// console.log(lastCar)
// console.log(firsCar)
// console.log(cars)
// console.log(cars.reverse())

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)

// const index = people.findIndex(function(person){
// 	return person.budget === 250000
// })
// console.log(people[index])


// const person = people.find(function(person){
// 	return person.budget === 200000
// })
// console.log(person)

// let findedPerson
// for (const person of people){
// 	if(person.budget ===200000){
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson)


// const person = people.find(person => person.budget === 150000)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
// 	return car.toUpperCase()
// })
// console.log(upperCaseCars)

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2Fid = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fid)

// const pow2Fid = fib.map(pow2)
// const filteriNumbers = pow2Fid.filter(num => {
// 	return num > 20
// })
// console.log(pow2Fid)
// console.log(filteriNumbers)


// Задача 1

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)



// const people = [
//     {name:'Marat', budget: 250000},
//     {name:'Maxsim', budget: 300000},
//     {name:'Victoria', budget: 150000}
// ]

// const allBudget = people
// .filter(person => person.budget >200000)
// .reduce((acc,person) =>{
//     acc += person.budget
//     return acc
// },0)

// console.log(allBudget)