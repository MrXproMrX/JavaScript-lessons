// var f = function(){
//     this.x = 5;
//     (function(){
//         this.x = 3
//     })();

//     console.log(this.x)
// }
// f()

// --------------------------

// let dataUser = {name:'Robin'}
// function newUser(dataUser){
//     dataUser = {name: 'Kate'};
// }

// newUser(dataUser);
// console.log(dataUser.name)

// --------------------------

// console.log(true + false + true)

// --------------------------

// var theArray = ['1','2','3'].map(parseInt);
// console.log(theArray)

// --------------------------

// var var1 = 12;
// (function SelfexecutedTestFun(){
//     console.log('value of var1 is:' + var1);
// })();

// console.log('value of var1 from out side is:' + var1)
// console.log('value of var2 from out side is:' + var2)

// --------------------------

// let a = 5;
// if(a){
//     let a = 2;
//     a *= a;
// }

// console.log(a)

// --------------------------

// let return = 5;
// let for = 'Hi';
// let let = false;
// console.log(return + for + let)

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }

// console.log(obj.for + obj.let + obj.return)

// --------------------------

// for(var i = 0; i < 10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },0)
// }

// --------------------------

// console.log(!5 == !2)

// --------------------------

// let max = 5

// console.log(max++)
// console.log(++max)
// console.log(max--)
// console.log(--max)

// --------------------------

// var m = [];
// console.log((a==a) + ' ' + (a ==! a));

// --------------------------

// for(var i = 0; i<5;i++){
//     console.log(i)
// }

// for(var i = 0; i<5;++i){
//     console.log(i)
// }

// --------------------------

console.log(null || 2 && 3 || 4);