let person={
    name:"Susan",
    age:25,
    height:"5ft3Inch",
    friend:{
        name:"Amanda",
        age:20
    }
}

let student=new Object();
student.name="Angeth"//adding a property
console.log(person.age);//log value
console.log(person.name);
console.log(person["name"]);
console.log(person.friend.name);
console.log(person["friend"["age"]]);
console.log(student);

person.age=27
person.school="AkiraChix";
console.log({person});

let person2=Object.assign(person);//cloning an object
console.log({person2});

let keys=Object.keys(person);
console.log({keys});

let values=Object.values(person)
console.log({values});