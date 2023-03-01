const person = Object.create(
    {
        calculateAge(){
            console.log('Age: ', new Date().getFullYear() - this.birthYear)
        }
    },
    {
    name:{
        value: 'Marat',
        enumerable:true,
        writable:true,
        configurable:true
    },
    birthYear:{
        value: 2003,
        enumerable:true,
        writable:false,
        configurable:false
    },
    age:{
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})
// person.name = 'Max'

for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log('key', key, person[key]) 
    }
}