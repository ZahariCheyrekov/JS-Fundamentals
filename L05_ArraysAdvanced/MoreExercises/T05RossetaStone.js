function solve(arr) {

    let rowsTemplate = Number(arr[0]);
    let templateMatrix = [];
    let templateCol = 0;
    let counter = 0;

    for (let i = 1; i <= rowsTemplate; i++) {
        counter++;
        templateMatrix.push(arr[i].split(' ').map(Number));
    }

    templateCol += counter;
    counter = 0;
    let messageMatrix = [];
    let messageRows = arr.length - rowsTemplate - 1;
    let messageCol = 0;

    for (let i = rowsTemplate + 1; i < arr.length; i++) {
        counter++;
        messageMatrix.push(arr[i].split(' ').map(Number));
    }

    messageCol += counter;
    counter = 0;

    let matrix = messageMatrix;
    let outputMessage = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] += templateMatrix[row % rowsTemplate][col % templateCol];
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j] % 27;

            if (num != 0) {
                matrix[i][j] = String.fromCharCode(num + 64);
            } else {
                matrix[i][j] = ' ';
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            outputMessage += matrix[i][j];
        }
    }

    console.log(outputMessage);
}