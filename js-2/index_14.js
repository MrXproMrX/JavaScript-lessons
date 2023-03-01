// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function senRequest(method,url,body = null){
//     return new Promise((resolve, reject) =>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method,url)
        
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')
        
//         xhr.onload = () =>{
//             if(xhr.status >= 400){
//                 reject(xhr.response)
//             }else{
//                 resolve(xhr.response)
//             }
//         }
        
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }

// senRequest('GET',requestURL)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

// const body = {
//     name: 'Vladulen',
//     age:26
// }

// senRequest('POST', requestURL, body)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))


// fETCH

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function senRequest(method,url,body = null){
    const headers = {
        'Content-Type':'application/json'
    }
   return fetch(url,{
    method:method,
    body:JSON.stringify(body),
    headers:headers
   }).then(Response => {
      if(Response.ok){
        return Response.json()
      }

      return Response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
   })
}

const body = {
    name: 'Vladulen',
    age:26
}

// senRequest('GET',requestURL)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

senRequest('POST', requestURL, body)
   .then(data => console.log(data))
   .catch(err => console.log(err))