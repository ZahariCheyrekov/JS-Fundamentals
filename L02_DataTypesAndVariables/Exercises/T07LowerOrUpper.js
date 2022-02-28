function solve(letter) {
    const upperOrLower = letter === letter.toLowerCase() ? 'lower-case' : 'upper-case';
    console.log(upperOrLower);
}

solve('L');
solve('f');