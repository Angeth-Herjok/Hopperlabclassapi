let student={
    name:"Angeth",
    age:20,
    introduce:function(){
        console.log("Hello");
        // console.log(`Hello my name is ${this.name} ${student.age}`);
        console.log(`Hello my name is ${this.name}`);
    }
}
student.introduce();
//student.hobby=()=>
student.hobby=function(){
    console.log("I love swimming");
}
console.log({student});
student.hobby();
delete student.age;
console.log({student});
student.introduce()
