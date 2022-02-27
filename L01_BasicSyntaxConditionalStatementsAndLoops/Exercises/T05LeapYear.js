function solve(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 'yes' : 'no';
}

console.log(solve(1984));
console.log(solve(2003));
console.log(solve(4));