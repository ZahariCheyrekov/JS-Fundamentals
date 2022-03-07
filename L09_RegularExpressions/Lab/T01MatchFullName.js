function solve(text) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];
    let validName;

    while ((validName = regEx.exec(text)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");