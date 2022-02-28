function solve(input) {
    console.log(typeof (input));

    if (input === null) {
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(input);
    }
}

solve('Hello, JavaScript!');
solve(18);
solve(null);