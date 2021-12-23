
// 01-let-const
var myVar = 1;
myVar = 2;
console.log(myVar);

let myLet = 2;
myLet = 3;
console.log(myLet);
// 以上二種寫法結果是一樣的

function foo(){
  var x = 0;
  {
    let x = 'foo';
  }
  // 請問 x 是 0 還是 foo 呢?
  console.log('foo x:', x);
}
foo();

const myConst = 3;
// myConst = 4;  // Error, const is ready-only
console.log(myConst);
