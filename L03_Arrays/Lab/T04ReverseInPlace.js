function solve(arr) {
    // console.log(arr.reverse().join(' '));

    for (let i = 0; i < arr.length / 2; i++) {
        swapElements(arr, i, arr.length - 1 - i);
    }

    console.log(arr.join(' '));

    function swapElements(arr, first, last) {
        let firstEl = arr[first];
        let lastEl = arr[last];

        arr[first] = lastEl;
        arr[last] = firstEl;
    }
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);