function solve(arr) {
    const result = arr.sort();

    let count = 1;
    result.forEach(element => {
        console.log(`${count++}.${element}`)
    });
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);