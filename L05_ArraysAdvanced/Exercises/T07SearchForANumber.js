function solve(first, second) {

    let result = first.slice(0, second[0]);

    result.splice(0, second[1]);

    result = result.filter(x => x === second[2]);

    console.log(`Number ${second[2]} occurs ${result.length} times.`);
}