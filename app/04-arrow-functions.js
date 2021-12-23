
console.log('04-arrow-functions')
var fun = function(){
  console.log('fun');
};
var funArrow = () => {
  console.log('funArrow');
};

var add = (a, b)=> {
  return a + b;
}
var sub = (a, b)=> (a - b);

fun();
funArrow();
