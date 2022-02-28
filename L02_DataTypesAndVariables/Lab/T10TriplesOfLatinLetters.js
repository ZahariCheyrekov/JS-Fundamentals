function solve(input) {
    const number = Number(input);

    for (let i = 0; i < number; i++) {
        let first = String.fromCharCode(97 + i);

        for (let j = 0; j < number; j++) {
            let second = String.fromCharCode(97 + j);

            for (let k = 0; k < number; k++) {
                let third = String.fromCharCode(97 + k);

                console.log(first + second + third);
            }
        }
    }
}

solve('3');
solve(2);