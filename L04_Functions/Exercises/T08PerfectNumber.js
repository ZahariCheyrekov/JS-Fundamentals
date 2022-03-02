function solve(number) {
    let sum = 0;

    for (i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    const result = sum / number === 2 ? `We have a perfect number!` : `It's not so perfect.`;

    console.log(result);
}