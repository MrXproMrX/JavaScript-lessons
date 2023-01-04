const person = {
	name: 'Marat',
	age: 19,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	// 'complex key': 'Complex Value',
	// ['key_' + (1+3)]: 'Computed Key', // Key_4
	greet(){
        console.log('greet from person')
	},

	info(){
		// console.log('this:', this)
		console.info('Информация про человека по имени', this.name)
	}
}
// const ageKey = 'age'
// console.log(person.name)
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.age++
// person.languages.push('uz')
// // person['key_4'] = undefined
// person.greet()
// delete person['key_4']
// console.log(person['key_4'])
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age, languages} = person
// console.log(name, age, languages)


// for(let key in person){
// 	if(person.hasOwnProperty(key)){
// 		console.log('key', key)
// 	    console.log('value:', person[key])
// 	}
// }


// Object.keys(person).forEach((key) =>{
// 	console.log('key', key)
//     console.log('value:', person[key])
// })


// Context
// person.info()

const logger = {
	keys(obj){
		console.log('Object Keys: ', Object.keys(this))
	},

	keysAndValues(){
		// Object.keys(this).forEach(key => {
		// 	console.log(`'${key}': ${this[key]}`)
		// })

        const self = this
		Object.keys(this).forEach(function(key) {
			console.log(`'${key}': ${self[key]}`)
		}.bind(this))
	},

	withParams(top = false,betwen = false,bottom = false){
		if (top) {
			console.log('------Start------')
		}

        Object.keys(this).forEach((key, index, array) => {
		 	console.log(`'${key}': ${this[key]}`)
		 	if (betwen && index !==array.length -1) {
			    console.log('------------')
		    }
		})

		if (bottom) {
			console.log('------End------')
		}
	}
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

// logger.keysAndValues.call(person)

logger.withParams.call(person,true,true,true)
logger.withParams.apply(person, [true,true,true])