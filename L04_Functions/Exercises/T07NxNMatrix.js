function solve(number) {
    let rowArr = []

    for (let row = 0; row < number; row++) {
        for (let col = 0; col < number; col++) {
            rowArr.push(number);
        }
        console.log(rowArr.join(' '))
        rowArr = [];
    }
}

solve(3);
solve(7);
solve(2);