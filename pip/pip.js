// Array
// array objects has length but others objects dont have
let num=[3,6,8,25,7,5,7]
console.log(num.length);
// map( return an array)
let multiples=num.map(item=>item*2);
console.log(multiples);

// foreach return undefined 
let triples=[];
num.forEach(item=>{
    triples.push(item*2)
})
console.log(triples);

// return array that pass the condition
let lessThan=num.filter(item=>item<10);
console.log(lessThan);



let getSeven=num.find(item=>item===7);
console.log(getSeven);

let nums=[1,2,3,4,5,6]
let divisibleThree=nums.filter(item=>item % 3===0)
console.log(divisibleThree);


// arguments of filter(element,array,index)
let divideThree=nums.filter(function(item){
    return item % 3===0
}
)
console.log(divideThree);

