const citiesRussia = ['Москва','Санкт-Петербуг','Казан','Новосибирск']
const citiesEurope = ['Берлин','Прага','Париж']

// console.log(...citiesRussia)

// const allCities = [...citiesRussia, ...citiesEurope]
// console.log(allCities)

// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)


const citiesRussiaWithPopulation = {
    Mascow:20,
    SaintPetersburg:8,
    Kazan:5,
    Novasibirsk:3
}

const ccitiesEuropeWithPopulation = {
    Mascow:26,
    Berlin:10,
    Praha:3,
    Paris:2
}

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...ccitiesEuropeWithPopulation})
// console.log({...ccitiesEuropeWithPopulation, ...citiesRussiaWithPopulation})
// const numbers = [5,37,42,17]
// console.log(Math.max(5,37,42,17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null,numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(nodes)
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

// Rest

function sum(a, b, ...rest){
    return a + b + rest.reduce((a,i) => a + i,0)
}
const numbers = [1,2,3,4,5,6,7,8]

// console.log(sum(...numbers))   

// const a = numbers[0]
// const b = numbers[1]

// const [a,b, ...other] = numbers
// console.log(a,b,other)

const person = {
    name:'Max',
    age:20,
    city: 'Moscow',
    country:'Russia'
}

const {name,age,...adress} = person
console.log(name, age, adress)