const person = new Object({
    name: 'Maxim',
    age:25,
    greet: function(){
        console.log('Greet!')
    }
})

Object.prototype.seyHello = function(){
    console.log('Hello !')
}

const lena  = Object.create(person)
lena.name = 'Elena'

const str = 'I am string'