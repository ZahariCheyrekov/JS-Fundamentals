function arrayManipulator(array, manipulations) {
    let actualManipulation = [];

    let index = 0;
    let element = 0;

    while (manipulations.length > 0) {

        actualManipulation = manipulations.shift().split(' ');

        switch (actualManipulation.shift()) {

            case 'add':
                index = Number(actualManipulation.shift());

                if (index < 0) {
                    index = 0;
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);

                } else {
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                }
                break;

            case 'addMany':
                index = Number(actualManipulation.shift());
                let many = 0;

                for (let i = 0; i < actualManipulation.length; i++) {
                    if (index < 0) {
                        index = 0;
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);

                    } else {
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    }
                }
                break;

            case 'contains':
                element = Number(actualManipulation.shift());
                console.log(array.indexOf(element));
                break;

            case 'remove':
                index = Number(actualManipulation.shift());

                if (index < 0 || index > array.length - 1) {

                } else {
                    array.splice(index, 1);
                }
                break;

            case 'shift':

                index = Number(actualManipulation.shift());
                index = index % array.length;
                let arrayForShift = array.slice(index - 1);

                if (index < 0) {

                    index = 0;
                    array.splice(index, 0);

                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }

                } else {
                    array.splice(index, 0);

                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                }
                break;

            case 'sumPairs':

                let sumArr = [];
                let lastNumFromOddArr = 0;

                if (array.length % 2 !== 0) {
                    lastNumFromOddArr = Number(array.pop());
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                    sumArr.push(lastNumFromOddArr);

                } else {
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                }

                array = sumArr;

                break;
        }

        if (manipulations[0] === 'print') {
            break;
        }
    }

    console.log(`[ ${array.join(', ')} ]`);
}