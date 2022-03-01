function solve(arr) {
    const result = arr.filter((x, i) => arr.slice(i + 1).every(y => x > y)).join(' ');
    console.log(result);
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);