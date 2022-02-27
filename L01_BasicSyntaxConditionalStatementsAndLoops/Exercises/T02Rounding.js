function solve(number, precision) {
    precision = precision < 15 ? precision : 15;
    
    let num = number.toFixed(precision);
    console.log(`${parseFloat(num)}`)
}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);