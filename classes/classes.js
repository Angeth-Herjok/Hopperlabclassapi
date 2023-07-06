class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
        this.race=age
    }
    greet(){
        console.log("Hello");
    }
};
let person=new Person("Jane",50)
console.log(person);
person.greet();

class Student extends Person{
    constructor(name,age){
    super(name,age)
}
}
let student=new Student("Henry",45)
console.log(student);

// to add your own properties
Student.prototype.height="6ft";
console.log(student.height);
//  want your own properties
class Sister extends Person{
    constructor(name,age){
        super(name,age)
        this.name=name
        this.age=age
        this.race="white"
    }
}
let sister=new Sister("Joan" ,23)
console.log(sister);