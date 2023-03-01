// const animal = {
//     name: 'Animai',
//     age: 5,
//     hesTail:true 
// }

// class Animai {

//     static type = 'ANIMAL'

//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hesTail = options.hesTail
//     }

//     voice(){
//         console.log('I am Animel!')
//     }
// }

// const animal = new Animai({
//     name: 'Animai',
//     age: 5,
//     hesTail:true 
// })

// class Cat extends Animai{
//     static type = 'CAT'
//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age * 7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age:7,
//     hesTail:true,
//     color:'black'
// })

class Component{
    constructor(selsctor){
        this.$el = document.querySelector(selsctor)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selsctor)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color
    }
}

const box1 = new Box({
    selsctor:'#box1',
    size:100,
    color:'red'
})

const box2 = new Box({
    selsctor:'#box2',
    size:120,
    color:'blue'
})

class Circle extends Box{
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selsctor:'#circle',
    size:90,
    color:'green'
})