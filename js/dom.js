// window.alert('1')
// window.prompt('Как тебя зовут ?')
// window.confirm('Как тебя зовут ?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class') // Всегда 1 элемент
const heading2 = document.querySelector('h2')
console.dir(heading2)

// const heading3 = heading2.nextElementSibling
// console.log(heading3)

const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length -1]
console.log(heading3)

setTimeout(()=>{
	addStylesTo(heading,'JavaScriot')
},1500)

const link = heading3.querySelector('a')

link.addEventListener('click',(event) => {
	event.preventDefault()
	console.log('Click on link',event.target.getAttribute('href'))
	const url = event.target.getAttribute('href')
	window.location = url
})

setTimeout(()=>{
	addStylesTo(link,'Практикуйся','blue')
},3000)

setTimeout(()=>{
	addStylesTo(heading2,'И все получится!','yellow', fontSize = '2rem')
},4500)


function addStylesTo(node,text,color = 'red',fontSize){
	node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.marginTop = '30px'
    node.style.backgroundColor = '#1a1717'
    node.style.padding = '20px'
    node.style.display = 'block'
    node.style.width = '100%'
    // false: '', undefined,null,0,false
    if(fontSize){
    	node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
	if (heading.style.color==='red') {
		heading.style.color = '#fff'
		heading.style.backgroundColor = '#046264'
	}else{
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color==='yellow') {
		heading2.style.color = '#fff'
		heading2.style.backgroundColor = '#046264'
	}else{
		heading2.style.color = 'yellow'
		heading2.style.backgroundColor = '#000'
	}
})