function Person(name,age){
    this.name=name;
    this.age=age
}
let person=new Person("Angeth",25)
console.log(person);
console.log(person.age);

// to add objects
person.height="3ft"
console.log(person);

// to add another person
let student=new Person("John",19)
console.log(student);
console.log(Person.prototype);
Person.prototype.gender="Female"
console.log(Person.prototype);

let person2=new Person("Jane",20)
console.log(person2);
console.log(person2.gender);
console.log(person.gender);

student.gender="male"
console.log(student);
// to change all values
