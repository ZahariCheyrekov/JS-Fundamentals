function solve(arr) {
    let uniqueChars = [...new Set(arr)];
    console.log(uniqueChars.join(' '));
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);