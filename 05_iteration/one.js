for (let num = 0; num < 10 ; num++) {
    const element = num;
    // console.log(element);
    
}


// for (let num = 1; num <= 10; num++){
//     const element = num;
//     if (num == 5) {
//         console.log(`5 is the best number`);
        
//     }
//     console.log(element);
// 1   
// }


for (let i = 1;  i <= 10; i++) {
    console.log(`outer lopp value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j +'=' + i*j);

        
    }  
}

// let myarray = ["superman","badman","flashman"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

for (let index = 0; index <= 20; index++) {
    console.log(`the value of index ${index}`);
    if (index == 5) {
        console.log(`the five is detected`);
        // break;
        continue
            
    }    
}
