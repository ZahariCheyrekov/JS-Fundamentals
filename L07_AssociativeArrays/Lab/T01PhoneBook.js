function solve(arr) {
    let phonebook = {};

    for (let line of arr) {
        let [name, number] = line.split(' ');
        phonebook[name] = number;
    }

    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);