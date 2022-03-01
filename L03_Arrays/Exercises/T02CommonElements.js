function solve(arrOne, arrTwo) {
    const matchingElements = arrOne.filter(el => arrTwo.includes(el));

    matchingElements.forEach(element => console.log(element));
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);