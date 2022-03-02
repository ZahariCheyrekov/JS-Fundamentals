function solve(n) {
    let evens = 0;
    let odds = 0;

    n = n
        .toString()
        .split('')
        .map(x => Number(x))
        .forEach(x => (x % 2 === 0 ? (evens += x) : (odds += x)));

    console.log(`Odd sum = ${odds}, Even sum = ${evens}`);
}