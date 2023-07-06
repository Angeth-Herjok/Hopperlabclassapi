function add(a,b){
    console.log(a+b);
}
add(10,15);

function multiply(a,b){
    return a*b
}
console.log(multiply(3,7));

function multiply(a=7,b=8){
    return a+b
}
console.log(multiply(3,7));