let success =true;
// let success=false
let promise=new Promise((resolve,reject)=>{
    if(success){
        resolve("I have a job")
    }
    else{
        reject("I do not have a job")
    }
})
console.log({promise});

promise.then(()=>{
    console.log("I will pay all debt");
})
promise.catch(error=>{
    console.log(error.message);
    console.log("I will apply again after three months");
})
promise.finally(()=>{
    console.log("I will make my family proud");
})