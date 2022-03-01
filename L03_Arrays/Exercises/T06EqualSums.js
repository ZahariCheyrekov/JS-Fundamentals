function solve(arr) {
    let index = 'no';

    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
        const rightSum = arr.slice(i).reduce((a, b) => a + b, 0);

        if (leftSum === rightSum) {
            index = i;
        }
    }

    console.log(index);
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);