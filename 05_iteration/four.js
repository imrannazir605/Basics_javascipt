const array = [1,2,3,4,5,6,7,8,9]

// const newnum = array.filter( (value => {
//     return value > 4
// }))
// console.log(newnum);


// array.forEach( (int) => {
//     if (int > 4) {
//         console.log(int);
//     }
// })

const newaray = []

// array.forEach( (value) => {
//     if (array > 4) {
//         newaray.push(value)
//     }
// })
// console.log(newaray);



const books_Audition = [
    {
        title: "Book1", genre : "History", publish : "1992"
    },
    {
        title: "Book2", genre : "scince", publish : "1996"
    },
    {
        title: "Book3", genre : "History", publish : "1993"
    },
    {
        title: "Book4", genre : "polticical scince", publish : "1993"
    },
    {
        title: "Book5", genre : "History", publish : "1991"
    },
]

const historybooks = books_Audition.filter( (bk) => bk.genre === 'History' )

console.log(historybooks);