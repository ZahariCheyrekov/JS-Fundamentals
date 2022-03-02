function solve(product, quantity) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let price = 0;

    switch (product) {
        case 'coffee':
            price = coffeePrice * quantity;
            break;

        case 'water':
            price = waterPrice * quantity;
            break;

        case 'coke':
            price = cokePrice * quantity;
            break;

        case 'snacks':
            price = snacksPrice * quantity;
            break;
    }

    console.log(price.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);