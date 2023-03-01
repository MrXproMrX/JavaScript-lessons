function calcValues(a, b){
    return[
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// const [sum,sub='Вычитания нет',multl,...other] = calcValues(42,10)
// const sum = result[0]
// const sub = result[1]
// console.log(sum, multl, other,sub)

// Objects

const person = {
    name: 'Max',
    age: 20,
    address:{
        country:'Russia',
        city:'Moscow'
    }
}

// const {name, ...info} = person
// console.log(name,info)

function logPerson({name: firstName = 'Без имени',age}){
    console.log(firstName + ' ' + age)
}
logPerson(person)