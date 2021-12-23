
console.log('02-destructuring');
// Array
var arr = [1, 2, 3];
var [a, b] = arr;
/*
 以上寫法等於以下寫法 
 var a = arr[0],
    b = arr[1];
 */
console.log(a, b);

// Object
var obj = { 
  name: 'milkmidi',
  age: 18,
};
var {name , age} = obj;
/*
 以上寫法等於以下寫法
 var name = obj.name,
    age = obj.age;
*/
console.log(name , age);

// 在函式的參數，也可以用解構函式寫法
const myFun = function({name, age}){
  console.log(name, age);
}
myFun({name:'milkmidi', age:18});
