function solve(pages, pagesPerHour, days) {
    const timeForBook = pages / pagesPerHour;
    const hoursPerDay = timeForBook / days;

    console.log(hoursPerDay);
}

solve(212, 20, 2);
solve(432, 15, 4);