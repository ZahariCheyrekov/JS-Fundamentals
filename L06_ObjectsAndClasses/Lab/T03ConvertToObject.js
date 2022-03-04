function solve(string) {

    let person = JSON.parse(string);
    let props = Object.keys(person);

    for (let prop of props) {
        console.log(`${prop}: ${person[prop]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');