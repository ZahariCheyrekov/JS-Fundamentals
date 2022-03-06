function solve(str) {

    let sum = 0;
    let word = str.shift().split('')
        .filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 || x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
    let instructions = str.shift().split('').join('');

    if (instructions === 'LOWERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
       
        for (let el of word) {
            el = el.charCodeAt();
            sum += el;
        }
    }

    if (instructions === 'UPPERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);
       
        for (let el of word) {
            el = el.charCodeAt();
            sum += el;
        }
    }
    return `The total sum is: ${sum}`;
}

console.log(valueOf(['AC/DC', 'UPPERCASE', '']));