const myArr = [1,2,3,4,5]
console.log(myArr[2]);


myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr)

myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.includes(5));


const newArray = myArr.join();
console.log(typeof newArray);

console.log('A',myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);