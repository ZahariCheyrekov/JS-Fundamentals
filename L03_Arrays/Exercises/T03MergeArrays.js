function solve(arrOne, arrTwo) {
    const result = arrOne.map((x, i) => (i % 2 === 0 ? Number(x) + Number(arrTwo[i]) : x + arrTwo[i]));
    console.log(result.join(' - '));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);

solve(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);