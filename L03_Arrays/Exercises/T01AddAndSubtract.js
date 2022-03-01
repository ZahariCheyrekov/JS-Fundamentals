function solve(arr) {
    const original = getSum(arr);

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        currentNumber % 2 === 0 ? currentNumber += i : currentNumber -= i;

        arr[i] = currentNumber;
    }

    const edited = getSum(arr);

    console.log(arr);
    console.log(original);
    console.log(edited);

    function getSum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);