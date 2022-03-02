function solve(a, b) {
    return (factorial(a) / factorial(b)).toFixed(2);

    function factorial(num) {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    }
}