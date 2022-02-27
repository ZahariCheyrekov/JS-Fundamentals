function solve(arr) {
    const user = arr.shift();
    const password = user.split('').reverse().join('');

    let tries = 0;

    let guess = arr.shift();
    let blocked = false;

    while (guess !== password) {
        tries++;

        if (tries === 4) {
            blocked = true;
            console.log(`User ${user} blocked!`);
            break;
        }
        
        console.log(`Incorrect password. Try again.`);

        guess = arr.shift();
    }

    if (!blocked) {
        console.log(`User ${user} logged in.`);
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['momo', 'omom']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);