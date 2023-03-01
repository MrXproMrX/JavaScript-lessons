console.log('Request data...')

// setTimeout(()=>{
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'awws',
//         port:2000,
//         status: 'wokring'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data',backendData)
//     },2000)
// },2000)

// const p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing data...')
        
//         const backendData = {
//             server: 'awws',
//             port:2000,
//             status: 'wokring'
//         }
//         resolve(backendData)
//     },2000)
// })

// p.then(data => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             data.modified = true
//             reject(data)
//         },2000)
//     })

// }).then(clienData => {
//     clienData.fromPromise = true
//     return clienData
// })
// .then(data => {
//     console.log('Modified', data)
// })
// .catch(err => console.log('Error', err))
// .finally(()=> console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), ms)
    })
}
// sleep(2000).then(()=> console.log('After 2 sec'))
// sleep(3000).then(()=> console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)]).then(() =>{
//     console.log('All promIses')
// })

Promise.race([sleep(2000), sleep(5000)]).then(() =>{
    console.log('Race promIses')
})

const template = document.querySelector('template')
console.dir(template.attributes[0].nodeValue)
console.dir(template.dataset.max)