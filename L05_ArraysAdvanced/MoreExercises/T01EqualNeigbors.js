function solve(arr) {
    let pairs = 0;

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length; col++) {
            let element = arr[row][col];

            if (element === arr[row][col + 1]) {
                pairs++
            }

            if (row !== arr.length - 1 && element === arr[row + 1][col]) {
                pairs++
            }
        }
    }

    return pairs;
}

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));