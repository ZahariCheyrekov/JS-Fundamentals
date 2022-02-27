function solve(number) {
    let lastDigit = number % 10;
    let nameDigit = '';

    switch (lastDigit) {
        case 0: nameDigit = 'zero'; break;
        case 1: nameDigit = 'one'; break;
        case 2: nameDigit = 'two'; break;
        case 3: nameDigit = 'three'; break;
        case 4: nameDigit = 'four'; break;
        case 5: nameDigit = 'five'; break;
        case 6: nameDigit = 'six'; break;
        case 7: nameDigit = 'seven'; break;
        case 8: nameDigit = 'eight'; break;
        case 9: nameDigit = 'nine'; break;
    }

    console.log(nameDigit);
}

solve(512);
solve(1);
solve(1643);