// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

for (let myNumber = 1; myNumber <= 100; myNumber++) {
    if (myNumber % 5 === 0 && myNumber % 7 === 0) {
        let myNumber = "ChickenMonkey"
         console.log(myNumber);
    }
    else if (myNumber % 7 === 0) {
        let myNumber = "Monkey"
        console.log(myNumber);
    }
    else if (myNumber % 5 === 0){
        let myNumber = "Chicken"
        console.log(myNumber);
    }
    else {
        console.log(myNumber);
    }
}