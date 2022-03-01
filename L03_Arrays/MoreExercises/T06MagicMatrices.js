function solve(arr) {

    let sumRow = arr.map((col => col.reduce((a, b) => a + b)));
    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));

    let areEqual = array => array.every(v => v === array[0]);

    
    return areEqual(sumRow) && areEqual(sumRow) && sumRow.toString() === sumCol.toString();
}

console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));