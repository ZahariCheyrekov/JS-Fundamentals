function solve(countryName) {
    let language = '';

    switch (countryName) {
        case 'England':
        case 'USA':
            language = 'English';
            break;

        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish';
            break;

        default:
            language = 'unknown';
            break;
    }

    console.log(language);
}

solve('England');
solve('Germany');