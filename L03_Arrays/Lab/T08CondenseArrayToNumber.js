function solve(arr) {

    if (arr.length === 1) {
        console.log(`${arr[0]}`);
    } else {

        while (arr.length > 1) {
            let condensed = [];
            condensed.length = arr.length - 1;

            for (let i = 0; i < arr.length - 1; i++) {
                condensed[i] = arr[i] + arr[i + 1];
            }

            arr = condensed;
        }

        console.log(arr[0]);
    }
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);