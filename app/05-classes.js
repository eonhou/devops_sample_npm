
console.log('05-classes')
class Animal {
  cry(){
    console.log('Animal cry')
  }
  sleep(){
    console.log('Animal sleep');
  }
}
class Cat extends Animal {
  cry(){
    console.log('喵喵喵!');
  }
}
class Dog extends Animal {
  cry(){
    console.log('旺旺旺');
  }
}
var cat = new Cat();
cat.cry();
cat.sleep();
var dog = new Dog();
dog.cry();
dog.sleep();