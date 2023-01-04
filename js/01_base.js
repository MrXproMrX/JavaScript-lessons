// 1 Переменные

// const firstName = 'Marat'
// const age = 19
// const isProgrammer = true

// 2 Мутирование

// console.log('Имя человека ' + firstName + ', а возраст человека: ' + age.toString())
// alert('Имя человека ' + firstName + ', а возраст человека: ' + age.toString())
// const lastName = prompt('Ввидите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 2003

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 32
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Тип данных

// const isProgrammer = true
// const name = 'Marat'
// const age = 19
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)

// 5 Приортет операторов

// const fullAfe = 19
// const birthYear = 1993
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAfe
// console.log(isFullAge)

// 6 Условные опрераторы

// const courseStatus = 'pendidng'

// if (courseStatus === 'ready'){
//     console.log('Курс уже готов и его можно проходить')
// }else if (courseStatus === 'pending'){
// 	console.log('Курс пока находится в процессе разработки')
// }else{
// 	console.log('Курс не получился')
// }

// const isReady = true

// if (isReady === true) {
// 	console.log('Все готов')
// }else{
// 	console.log('Все не готово!')
// }

// Тернарное выражение

// isReady ? console.log('Все готов') : console.log('Все не готово!')

// const num1 = 42
// const num2 = '42'
// console.log(num1 == num2)

// 7 Булевая логика

//  Функции

function calculateAge(year){
    return 2022 - year
}

// const myAge = calculateAge(2003)
// console.log(myAge)

// function logInfoAbout(name,year){
// 	const age = calculateAge(year)
	
// 	if(age > 0){
// 		console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// 	}else{
// 		console.log('Вообще-то это уже будущее!')
// 	}
// }

// logInfoAbout('Марат', 2003)
// logInfoAbout('Марат', 2022)

// 9 Массивы

// const cars = ['Мазда','Мерседес','Форд']

// console.log(cars)

// 10 Циклы

// const cars = ['Мазда','Мерседес','Форд']

// for (let i = 0 ; i < cars.length; i++){
// 	const car = cars[i]
//    console.log(car)
// }

// for ( let car of cars){
// 	console.log(car)
// }

// 11 Обьекты

// const person = {
// 	firsName: 'Marat',
// 	lastName: 'Ismailov',
// 	year:2003,
// 	languages:['Ru','En','Uz'],
// 	hasWife: false,
// 	greet: function(){
// 		console.log('greet form person')
// 	}
// }

// console.log(person.firsName)
// const key = 'year'
// person.isProgrammer = true
// console.log(person)
// person.greet()