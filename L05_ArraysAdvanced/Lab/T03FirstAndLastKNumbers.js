function solve(arr) {
    let k = arr.shift();

    let firstPart = arr.slice(0, k);
    let secondPart = arr.slice(-k);

    console.log(firstPart.join(' '));
    console.log(secondPart.join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);