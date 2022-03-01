function solve(num) {

    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];

    const result = num >= 1 && num <= 7 ? days[num - 1] : 'Invalid day!';

    console.log(result);
}

solve(3);
solve(6);
solve(11);