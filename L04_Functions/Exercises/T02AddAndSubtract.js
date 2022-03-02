function solve(...args) {
    const last = args.pop();

    function add() {
        return args.reduce((a, b) => a + b);
    }

    function subtract() {
        return add() - last;
    }

    return subtract();
}