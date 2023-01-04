// const button = document.querySelector('#button');

// button.onclick = () =>{
// 	let name = prompt('Как вас завут')

// 	if (name === 'Marat') {
// 		alert('Привет ,' + name + ', рады тебя видеть!')
// 	}else if(name === 'Ruslan'){
// 		alert('Привет ,' + name + ', рады тебя видеть!')
// 	}else if(name === 'Zarina'){
// 		alert('Привет ,' + name + ', рады тебя видеть!')
// 	}else if(name === 'Eldor'){
// 		alert('Привет ,' + name + ', рады тебя видеть!')
// 	}else if(name === 'Katiea'){
// 		alert('Привет ,' + name + ', рады тебя видеть!')
// 	}else{
// 		alert('Привет вы кто токое')
// 	}
// }

// var myNmae = 'Marat';
// var myAge = 19;

// console.log('Миня завут ' + myNmae + ' меня ' + myAge + ' лет')

// var test = 6<3
// console.log(test)

// var myNameArray = ['Marat','Ruslan','Eldor'];
// var myNumbersArray = [12,14,16];
// console.log(myNumbersArray);

// var dag = {name:'Marat',breed:'Dalmatian'};
// console.log(dag)

// var myNumber = '500'
// console.log(typeof(Number(myNumber)))


// var myInt = 5
// var myFlaut = 6.667
// console.log(typeof(myInt))

// let n = 5
// let m = 10
// let b = 15
// let c = 20

// console.log(n+m)
// console.log(b-n)
// console.log(m%c)
// console.log(m*c)

// var num1 = 10
// var num2 = 50
// console.log(9*num1)

// let sum = 5 + 10 * 3
// console.log(sum)

// console.log((num1+num1)/(8+2))

// var guessCount = 10;
// console.log(guessCount++)
// console.log(guessCount++)

// var num2 = 6
// num2--

// console.log(num2)

// var x = 3
// var y = 4

// console.log(x==y)


// var btn = document.querySelector('#button')
// var txt = document.querySelector('#text')
// btn.addEventListener('click',updateBtn)

// function updateBtn(){
// 	if (btn.textContent === 'Start machine') {
// 		btn.textContent = 'Stop machine';
// 		txt.textContent = 'The machine has started!';
// 	}else {
// 		btn.textContent = 'Start machine';
// 		txt.textContent = 'The machine id stopped.';
// 	}
// }

// var string = 'I\' The revolution will not be televised.'
// console.log(string)

// var button = document.querySelector('#button')

// button.onclick = () =>{
// 	var name = prompt('What is your name?')
// 	alert('Hello ' + name + ', nice to see you!')
// }

// console.log('Front ' + 242)

// var m = '19'
// var n = '67'
// var b = 123

// console.log(Number(m) + Number(n))
// console.log(typeof(Number(m) + Number(n)))
// console.log(String(b))
// console.log(typeof(String(b)))

// let string = 'mozilla'
// console.log(string.length)
// console.log(string.length-1)
// console.log(string[0])
// console.log(string.indexOf('zilla'))
// console.log(string.indexOf('vanilla'))

// if (string.indexOf('mozilla') === -1) {
// 	console.log('сделать что-то, если mozilla не является частью этой строки')
// }else if(string.indexOf('mozilla') !== -1){
// 	console.log('сделать что-то, если mozilla является частью этой строки')
// }

// console.log(string.slice(0,3));
// console.log(string.slice(2));

// var radData = 'My NaMe Is MuD';
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());

// console.log(string = string.replace('maz','van'));

// let list = document.querySelector('.output ul');
// list.innerHTML = '';

// var greetings = ['С днём рождения!',
//                  'С Рождеством, любовь моя',
//                  'Счастливого Рождества всей твоей семье',
//                  'Ты — та, кто нужен мне на Рождество',
//                  'Поправляйся скорее'];

// for(var i = 0; i < greetings.length; i++){
// 	var input = greetings[i];

// 	if (greetings[i]) {
// 		var result = input;
// 		var listItem = document.createElement('li');
// 		listItem.textContent = result;
// 		list.appendChild(listItem);
// 	}

// 	if(greetings[i].indexOf('Рождеств') !== -1) {
// 		var result = input;
// 		var listItem = document.createElement('li');
// 		listItem.textContent = result;
// 		list.appendChild(listItem);
// 	}
// }



// let list = document.querySelector('.output ul');
// list.innerHTML='';

// var cities = ['лонДон','МанЧЕСТёр','БиРминГЕМ','лиВЕРпуЛЬ'];
// for (var i = 0; i < cities.length; i++){
// 	var input = cities[i];

//     var lower = input.toLowerCase();
//     var firstLetter  = lower.slice(0,1);
//     var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());

//     var result = capitalized;
// 	var listItem = document.createElement('li');
// 	listItem.textContent = result;
// 	list.appendChild(listItem)
// }

var list = document.querySelector('.output ul');
list.innerHTML = '';

var statinons = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
for(var i = 0; i < statinons.length; i++){
	var input = statinons[i];
    
    var code = input.slice(0,3);
    var semiC = input.indexOf(';');
    var name = input.slice(semiC + 1);

	var result = code + ': ' + name;
	var listItem = document.createElement('li');
	listItem.textContent = result;
	list.appendChild(listItem);
}