function solve(arr) {
    const result = [];

    let number = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case 'add':
                result.push(number);
                break;

            case 'remove':
                result.pop();
                break;
        }

        number++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve([['remove', 'remove', 'remove']]);