
//promisis method one
const promisesOne = new Promise( function (resolve,reject){
    setTimeout( function(){
        console.log("asycronus is complete");
        resolve()
    })
   
}) 
promisesOne.then(function(){
    console.log("2nd part runing");
})

//promises method two
new Promise( function (resolve,reject){
    setTimeout(function (){
        console.log("asyncrous runing");
        resolve()
    },1000)
}).then(function(){
    console.log("syncronus part two is runing");
})

//promisis method three
const promisesThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({ Name:"imran", email: "imran@gmail.com"})
    },1000)
})
promisesThree.then(function(userData){
   console.log(userData);
})


//promisos four

const promisesFour = new Promise( function (resolve,reject){
    setTimeout( function (){
        let Error = true;
    if(!Error){
        resolve({language: "java script", password: "kamran321" });
    }else{
        reject('eror: js went wrong');
    }
},1000)

})
promisesFour.then(  (user) => {
    console.log(user);
    return user.language
}).then( (language)  => {
    console.log(language);
}).catch( function (Error){
    console.log(Error);
})

//promisis five

const promisesFive = new Promise( function (resolve,reject){
    setTimeout( function (){
        let Error = false;
    if(!Error){
        resolve({userName: "java script", password: "kamran321" });
    }else{
        reject('eror: js went wrong');
    }
},1000)

})

async function consumePromiseFive(){
 try {

  const response = await promisesFive
   console.log(response);
} catch (Error){
    console.log(Error);
}
} 
consumePromiseFive()