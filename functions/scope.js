// global variables
let a=20;
function add(b){
    console.log(a+b);
     let fruit="Apple" //   local variables canot be accessed outside the function
    console.log(fruit);
}
add(50);

// // scope
// let c=20;
// function add(b){
//     console.log(c+b);
//     let fruit="Apple";
//     console.log(fruit);
// }
// add(50);

// function substract(c){
//     a=50;
// let b=56
//     console.log(a-c);
// }
// substract(100);
// console.log("a2",a);
// console.log(b);

function greet(){
    let hello="hi";
    function talk(){
        let c="hello there"
        console.log(`${hello} ${c}`);
    }
    talk();
}
greet();

