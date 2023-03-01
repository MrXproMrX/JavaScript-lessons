// const obj = {
//     name: 'Marat',
//     age:20,
//     job: 'Fullstack'
// }

// const entries = [
//     ['name','Marat'],
//     ['age',20],
//     ['job','Fullstack'],
// ]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// const map = new Map(entries)

// map
//    .set('newField',42)
//    .set(obj,'Valeu of object')

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// for(let [key, value] of map){
//     console.log(key, value)
// }

// for(let val of map.values()){
//     console.log(val)
// }

// for(let key of map.keys()){
//     console.log(key)
// }

// map.forEach((val,key,m) => {
//     console.log(val,key)
// })


// ======================

// const array = [...map]
// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj)

// ======================

// const users = [
//     {name:'Elena'},
//     {name:'Alex'},
//     {name:'Irina'},
// ]

// const visits = new Map()

// visits
//    .set(users[0], new Date())
//    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//    .set(users[2], new Date(new Date().getTime() + 5000 * 60))
// function lastVisit(user){
//     return visits.get(user)
// }

// console.log(lastVisit(users[2]))

// set ------------------------ 

// const set = new Set([1,2,3,3,4,5,5,6])
// set.add(10).add(20).add(30).add(20)
// // console.log(set)
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)

// console.log(set.keys())
// console.log(set.entries())

// ===========

// function uniqValues(array){
//     return [...new Set(array)]
// }

// console.log(uniqValues([1,2,2,4,4,4,4,4,4,5,6,6,6]))


// weakmap

// let obj = {name:'weakmap'}

// const arr = [obj]
// obj = null

// console.log(arr)

// const map = new WeakMap([
//     [obj,'obj data']
// ])

// obj = null

// ==============

// const cache = new WeakMap()

// function cacheUser(user){
//     if(!cache.has(user)){
//         cache.set(user, Date.now())
//     }

//     return cache.get(user)
// }

// console.log(map)

// let lene = {name: 'Elena'}
// let alex = {name: 'Alex'}
// cacheUser(lene)
// cacheUser(alex)
// console.log(cache.has(lene))
// console.log(cache.has(alex))

// weakset

const users = [
    {name:'Elena'},
    {name:'Alex'},
    {name:'Irina'},
]

const visits = new WeakSet()
visits.add(users[0]).add(users[1])
users.splice(1,1)
console.log(visits.has(users[0]))
console.log(visits.has(users[1]))