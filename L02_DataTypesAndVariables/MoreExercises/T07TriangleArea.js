function solve(a, b, c) {
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
    console.log(area);
}

solve(2, 3.5, 4);
solve(3, 5.5, 4);