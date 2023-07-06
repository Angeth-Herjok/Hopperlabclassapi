let people=[
    {name:"Anne",age:20,height:"3ft"},
    {name:"Henry",age:30,height:"7ft"},
    {name:"Susan",age:40,height:"6ft"},

];
let ages=people.map(item=>item.age);
console.log({ages});

let weights=people.map(item=>{
    return{
        // item
        ...item,
        weight:50,
    }
})
console.log({weights});

let changdWeight=weights.map(item=>{
    if(item.name==="Ann"){
        item.weight=60;
    }
    return item
})
console.log({changdWeight});