function solve(input) {

    let msgCount = input.shift();
    let pattern = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
   
    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < msgCount; i++) {

        let line = input[i];
        let decryptKey = line.match(/[star]/gi) && line.match(/[star]/gi).length;
        let decryptedMsg = [];

        for (let letter of line) {
            let symbol = letter.charCodeAt();

            symbol -= decryptKey;
            symbol = String.fromCharCode(symbol);
            decryptedMsg.push(symbol);
        }

        decryptedMsg = decryptedMsg.join("");
        decryptedMsg = pattern.exec(decryptedMsg);

        if (decryptedMsg) {

            if (decryptedMsg.groups.attackType === "A") {
                attacked.push(decryptedMsg.groups.planetName);
            } else {
                destroyed.push(decryptedMsg.groups.planetName);
            }
        }
    }

    attacked.sort((a, b) => a.localeCompare(b))
    destroyed.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}
