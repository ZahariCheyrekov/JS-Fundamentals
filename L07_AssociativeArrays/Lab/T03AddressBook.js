function sovle(arr) {
    let addressBook = {};

    for (let line of arr) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in entries) {

        let data = entries[key];
        let name = data[0];
        let address = data[1];

        console.log(`${name} -> ${address}`);
    }
}

sovle(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

sovle(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);