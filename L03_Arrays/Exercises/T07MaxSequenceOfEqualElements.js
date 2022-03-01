function solve(arr) {

    let maxSeq = 1;
    let longestSeq = 1;
    let number = arr[0];
    let prevNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (currentNumber === prevNumber) {
            longestSeq++;

            if (longestSeq > maxSeq) {
                maxSeq = longestSeq;
                number = currentNumber;
            }

        } else {
            longestSeq = 1;
            prevNumber = currentNumber;
        }
    }

    let result = [];

    for (let i = 0; i < maxSeq; i++) {
        result.push(number);
    }

    console.log(result.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);