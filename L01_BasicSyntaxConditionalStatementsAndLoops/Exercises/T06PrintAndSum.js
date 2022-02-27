function solve(a, b) {
    let sum = 0;
    let numbers = [];

    for (let i = a; i <= b; i++) {
        numbers.push(i);
        sum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);