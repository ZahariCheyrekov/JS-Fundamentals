function solve(startingYield) {
    let totalExtract = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalExtract += (startingYield - 26);

        startingYield -= 10;
        days++;
    }

    totalExtract -= 26;

    if (totalExtract < 0) {
        totalExtract = 0;
    }

    console.log(days);
    console.log(totalExtract);
}

solve(111);
solve(450);