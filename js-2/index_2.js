function hello(){
    console.log('hello', this)
}

const person = {
    name: 'Marat',
    age:20,
    sayHello: hello,
    soyHelloWindow: hello.bind(document),
    logInfo: function(job,phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age:23
}

// person.logInfo.bind(lena,'Frontend', '99-730-01-79')()
// person.logInfo.call(lena,'Frontend', '99-730-01-79')
person.logInfo.apply(lena,['Frontend', '99-730-01-79'])

const array = [1,2,3,4,5,6]

// function multBy(arr,n){
//     return arr.map(function(i){
//         return i * n
//     })
// }

Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i * n
    })
}

console.log(array.multBy(2))