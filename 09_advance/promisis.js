
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