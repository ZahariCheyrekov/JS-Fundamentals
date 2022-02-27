function solve(a, b, c) {
    let numbers = [];
    numbers.push(a);
    numbers.push(b);
    numbers.push(c);

    numbers.sort((a, b) => b - a);

    console.log(numbers.join('\n'));
}

solve(2, 1, 3);
solve(-2, 1, 3);
solve(0, 0, 2);