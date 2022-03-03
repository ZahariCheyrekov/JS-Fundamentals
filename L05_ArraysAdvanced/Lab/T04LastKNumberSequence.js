function solve(n, k) {

    let result = [1];

    for (let i = 0; i < n - 1; i++) {

        let sum = 0;
        let end = result.slice(-k);

        for (let j = 0; j < end.length; j++) {
            sum += end[j];
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}

solve(6, 3);
solve(8, 2);