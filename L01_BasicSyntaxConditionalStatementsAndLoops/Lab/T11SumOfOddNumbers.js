function solve(num) {
    let currentNumber = 1;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2;
    }

    console.log('Sum: ' + sum)
}

solve(5);
solve(3);