
class Person {
constructor (name= 'Anonymous', age= '0') {
   this.name = name;
   this.age = age;
 }
 getDescription() {
   return `${this.name} is ${this.age} years old !`;
 }
}
class Student extends Person { 
  constructor (name,age,major) {
    super(name, age);
    this.major= major;
  }
}

const me = new Student ('Jokosenumi Ahmed','21', 'Computer Science');
console.log(me);

const other = new Student ();
console.log(other);
