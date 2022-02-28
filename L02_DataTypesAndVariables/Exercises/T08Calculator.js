function solve(first, sign, second) {
    const actions = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "**": (x, y) => x ** y,
        "%": (x, y) => x % y
    }

    const result = actions[sign](first, second).toFixed(2);
    console.log(result);
}

solve(5, '+', 10);
solve(25.5, '-', 3);