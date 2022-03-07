function solve(input) {
    let names = [];
    let totalPrice = 0;

    let regex = />>(?<furnitureName>[A-Za-z]+)<<(?<price>[\d]*[.]?[\d]+)!(?<quantity>[\d]+)/g;
    let furniture;

    while ((furniture = regex.exec(input)) !== null) {

        if (furniture === 'Purchase') {
            break;
        }

        let name = furniture.groups.furnitureName;
        let price = furniture.groups.price;
        let quantity = furniture.groups.quantity;

        names.push(name);
        totalPrice += quantity * price;
    }

    console.log('Bought furniture:');

    if (names.length !== 0) {
        console.log(names.join('\n'));
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve('>>Sofa<<312.23!3 >>TV<<300!5 >Invalid<<!5 Purchase');