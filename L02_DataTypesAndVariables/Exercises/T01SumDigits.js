function solve(number) {
    const result = number
        .toString()
        .split('')
        .map(x => Number(x))
        .reduce((a, b) => a + b);

    console.log(result);
}

solve(245678);
solve(97561);
solve(543);