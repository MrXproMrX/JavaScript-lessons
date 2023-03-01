const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos(){
//     console.log('Fetch todo started...')
//     return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data', data)
//     })
//     .catch(e => console.error(e))

async function fetchAsyncTodos(){
    console.log('Fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        for(var i = 0; i < data.length; i++){
            console.log(data[i].id)
            console.log(data[i].title)
        }
    }catch (e){
        console.error('Error', e)
    }finally{
        console.log('Hello finally')
    }
}

fetchAsyncTodos()