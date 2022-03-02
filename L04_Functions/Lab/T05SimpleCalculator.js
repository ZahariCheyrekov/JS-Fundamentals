function solve(x, y, operator) {

    const actions = {
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y,
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y,
    }

    console.log(actions[operator](x, y));
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');