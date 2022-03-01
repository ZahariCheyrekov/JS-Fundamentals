function solve(first, second) {

    let firstSum = findSumArray(first);
    let secondSum = findSumArray(second);

    let areEqual = true;

    for (let index = 0; index < first.length; index++) {

        if (first[index] !== second[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${firstSum}`);
    }

    function findSumArray(arr) {
        return arr
            .map(Number)
            .reduce((a, b) => a + b, 0);
    }
}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);