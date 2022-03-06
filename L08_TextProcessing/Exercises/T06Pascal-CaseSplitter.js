function solve(string) {
    string = string.split('');

    let words = [];

    let currentWord = '';
    currentWord += string[0];

    for (let i = 1; i < string.length; i++) {
        let letter = string[i];

        if (letter === letter.toLowerCase()) {
            currentWord += letter;
        } else {
            words.push(currentWord);
            currentWord = '';
            currentWord += letter;
        }

        if (i == string.length - 1) {
            words.push(currentWord);
        }
    }

    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');