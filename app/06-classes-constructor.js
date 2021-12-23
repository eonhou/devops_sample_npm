
console.log('06-classes-constructor')
class Animal {
  constructor(name){
    this.name = name;
  }
  cry(){
    console.log(this.name + 'Animal cry')
  }
  sleep(){
    console.log(this.name + 'Animal sleep');
  }
}
class Cat extends Animal {
  constructor(name){
    super(name);
  }
  cry(){
    console.log(this.name + '喵喵喵!');
  }
}
class Dog extends Animal {
  constructor(name){
    super(name);
  }
  cry(){
    console.log(this.name + '旺旺旺');
  }
}
var cat = new Cat('拍拍');
cat.cry();
cat.sleep();

var cat2 = new Cat('花花');
cat2.cry();
cat2.sleep();

var dog = new Dog();
dog.cry();
dog.sleep();

/* React.Component
class YourComponent extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
}
*/
