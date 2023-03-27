// document.write("JavaScript говорит привет!")
// console.log('JavaScript говорит привет!')
// console.error('JavaScript говорит привет!')
// console.warn('JavaScript говорит привет!')


// const num = 5;
// console.log("Переменная: " + num + ".")

// var number;
// number = true;

// var num_1 = 5;
// var num_2 = "5";


// var num_1 = 5;
// var num_2 = 15;

// console.log("Вычитание: " + (num_1 % num_2))

// var num_3 = 5;
// num_3 += 7;
// console.log("Вычитание: " + num_3)

// var str_1 = Number("12");
// var str_2 = Number("2");

// console.log("Вычитание: " + (str_1 + str_2))

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.E);
// console.log("Math: " + Math.min(4,5,6,2,0,3,7));
// console.log("Math: " + Math.max(4,5,6,2,0,3,7));
// console.log("Math: " + Math.random(1,2,3,4,5,6,7,8,9,10));


// var number = 15;
// var isHaHouse = true

// if(number == 15 || isHaHouse == true){
//     console.log("Ok")
// }else if(number < 10){
//     console.log("Ok!")
// }else if(number == 7){
//     console.log("7!")
// }else if(number >= 15){
//     console.log(">= 15")
// }else{
//     console.log("Else!")
// }

// var stroka = "Word";
// switch(stroka){
//     case"4":
//     console.log("Переменная со значением 4");
//     break;
//     case"45":
//     console.log("Переменная со значением 45");
//     break;
//     case"Word":
//     console.log("Переменная со значением Word");
//     break;
//     default:
//     console.log("Default");
//     break;
// }


// var arr = [15,true,"stroka",5.7,0,-100];
// arr[3] = "word"
// console.log(arr.length)

// var matrix = [
//     [4,6,8],
//     ["stroka",5.7],
//     [5.7,0,-100]
// ]
// matrix[1][0] = 90
// console.log(matrix)


// for(var i = 100; i > 5;i /= 2){
//     console.log(i)
// }

//  var j = 1000;
//  while(j >= 100){
//      console.log(j)
//     j-=100
//  }

// var x = 0
// do{
//     x++
//   console.log(x)
// }while(x < 10)


// var data = confirm("Вы сейчас дома ?")
// if(data){
//     alert("Вы молодец")
// }

// var data = prompt("Скажите сколько вам лет")
// console.log(data)

// var person = null;
// if(confirm("Вы точно уверены?")){
//     person = prompt("Введите ваше имя");
//     alert("Привет, " + person);
// }else{
//     alert("Вы нажали на <<Отмена>>")
// }


// function info(word){
//     console.log(word + "!");
// }

// function summa(a,b){
//     var res = a + b
//     info(res)
// }

// summa(5,7);

// function summa(arr){
//     var sum = 0;

//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum
// }

// var array = [6,8,1];
// var array_2 = [6,8,1,7];
// var array_3 = [6,8,1,90];
// var res = summa(array);
// console.log("Результат: " + res);
// var num = 10;
// function info(){
//     var num = 20;
//     console.log(num)
// }
// info()
// console.log(num)
// var counter = 0;
// function onClickButton(el){
//     counter++
//     el.innerHTML = "Вы нажали на кнопку: " + counter
// }