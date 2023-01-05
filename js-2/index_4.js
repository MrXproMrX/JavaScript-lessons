console.log('Start')
console.log('Start 2')

window.setTimeout(function(){
	console.log('Inside timeout, after 2000 seconds')
},5000)

console.log('End')

function timeout2sec(){
	console.log('timeout 2 sec')
}
setTimeout(timeout2sec,2000)