function solve(arr) {
    arr = arr.map(x => x.split(' ').map(Number));

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < arr.length; row++) {
        primaryDiagonalSum += arr[row][row];
        secondaryDiagonalSum += arr[row][arr[row].length - 1 - row];
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {

        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {

                if (col !== arr.length - 1 - row && col !== row) {
                    arr[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    arr.forEach(row => console.log(row.join(' ')));
}

solve(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
solve(['1 1 1', '1 1 1', '1 1 0']);