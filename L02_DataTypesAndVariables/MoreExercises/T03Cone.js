function solve(r, h) {
    let volu = (((Math.PI * r * r) * h) / 3).toFixed(4);
    let res = 'volume';

    console.log(`${res} = ${volu}`);

    let s = Math.sqrt(r * r + h * h);
    let arr = Math.PI * r * (r + s);
    let area = 'area';

    console.log(`${area} = ${arr.toFixed(4)}`);
}

solve(3, 5);
solve(3.3, 7.8);