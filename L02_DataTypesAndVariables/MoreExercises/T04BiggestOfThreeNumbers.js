function solve(...args) {
    const biggestNumber = args.sort((a, b) => b - a);
    console.log(biggestNumber[0]);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);
solve(2, 2, 2);