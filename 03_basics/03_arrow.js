// const user = {
//     username : "imran",

//     wellcomeMessage: function () {
//         console.log(`${this.username} welcome to the website`);
        
//     }
//     // console.log(this.username);
// }
// user.wellcomeMessage()
// user.username = "saqib"
// user.wellcomeMessage()



// const user = {
//     username : "hamad",
//     age : 23,
//     userMessage : function(){
//         console.log(`${this.username} , wellcome to our website`);
//     }

// }
// user.userMessage()


//arrow function
const userlogin = (username) => {
    return `${username} wellcome to the new page`
}
console.log(userlogin("imran"));