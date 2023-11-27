//object literals method
// const myobj = {
//     name : "imran",
//     "fullname" : "imran nazir",
//     age : 23,
//     email : "imran@gmail.com",
//     userlogin : false,
// }

// console.log(myobj.age);
// console.log(myobj["fullname"]);
// console.log(myobj["email"]);
// console.log(myobj.userlogin);

const myobj2 = {}
 
myobj2.id = "123"
myobj2.name = "imran"
myobj2.email = "imran@gmail.com"


// console.log(myobj2.id);


// const obj3 = {1:"a",2:"B"}
// const obj4 = {3 : "c", 4: "D"}
// // const obj5 = Object.assign({}, obj3, obj4)
// const obj5 = {...obj3,...obj4}
// console.log(obj5);

// const userlogindata = [
//     {
//     id : 123,
//     email: "imran@gmail.com"
//     },
//     {
//         id : 123,
//         email: "imran@gmail.com"
//      },

//     {
//             id : 123,
//             email: "imran@gmail.com"
//      },
// ]

// userlogindata[1].email
console.log(myobj2);

console.log(Object.keys(myobj2));
console.log(Object.values(myobj2));
console.log(Object.entries(myobj2));