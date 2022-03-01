function solve(arr) {
    const result = [];
    const step = Number(arr.pop());

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);