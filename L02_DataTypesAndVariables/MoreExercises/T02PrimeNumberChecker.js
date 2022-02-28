function solve(number) {
    let isPrime;

    for (let i = 2; i <= number; i++) {
        isPrime = true;

        for (let k = 2; k < i; k++) {
            if (i % k === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    console.log(isPrime);
}

solve(7);
solve(8);
solve(81);