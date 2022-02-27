function solve(n) {
    let division = false
    const divisions = [2, 3, 6, 7, 10];

    divisions.forEach(x => {
        if (n % x === 0) {
            division = x
        }
    });

    console.log(division ? `The number is divisible by ${division}` : `Not divisible`);
}

solve(30);
solve(15);
solve(12);
solve(1643);