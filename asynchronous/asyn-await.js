// synchronous does not have async at the last function
function greet(){
    console.log("Welcome to our site");
}
greet()
let data=[{}]
let createUser=new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>(resolve("User successfully created")),5000)

    }
    else{
        setTimeout(()=>(reject("User already exists")),5000)
    }
})
// .then(()=>console.log("success"))
// .catch(()=>console.log("Fail")) chain
async function createUserAccount(){
    let response=await createUser
    console.log({response});
}
createUserAccount()
// to make it an asynchronous use a keyword async
// async is also use to await a promise