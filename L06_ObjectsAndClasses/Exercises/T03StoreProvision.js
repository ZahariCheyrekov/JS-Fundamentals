function solve(stock, ordered) {

    let storeObj = {};

    let inStock = restock(stock, storeObj);
    let inOrder = restock(ordered, inStock);

    for (let product in inOrder) {
        console.log(`${product} -> ${inOrder[product]}`);
    }

    function restock(arr, obj) {

        while (arr.length !== 0) {
            let [product, qty] = [arr.shift(), arr.shift()];

            if (!obj.hasOwnProperty(product)) {
                obj[product] = Number(qty);
            } else {
                obj[product] += Number(qty);
            }

        }
        return obj;
    }
}