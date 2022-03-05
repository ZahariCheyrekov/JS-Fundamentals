function solve(arr) {
    let storage = new Map();

    for (let line of arr) {

        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        let existing = 0;
        if (storage.has(product)) {
            existing = storage.get(product);
        }

        storage.set(product, existing + quantity);
    }

    storage.forEach((key, value) => console.log(`${value} -> ${key}`));
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

solve(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);