function solve(input) {
    let redex = /\+359([ -])2\1[\d]{3}\1[\d]{4}\b/g;

    let matches = [];
    let phoneNumber;

    while ((phoneNumber = redex.exec(input)) !== null) {
        matches.push(phoneNumber[0]);
    }

    console.log(matches.join(', '));
}

solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");