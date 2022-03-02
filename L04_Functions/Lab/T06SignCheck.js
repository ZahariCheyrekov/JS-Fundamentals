function solve(numOne, numTwo, numThree) {
    const result = numOne * numTwo * numThree;
    const negativeOrPositive = result > 0 ? 'Positive' : 'Negative';

    console.log(negativeOrPositive);
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);