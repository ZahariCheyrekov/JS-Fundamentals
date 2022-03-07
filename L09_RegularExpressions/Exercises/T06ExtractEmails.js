function solve(input) {
    let regex = /\b((?<=\s)(?<user>[a-zA-Z0-9]+)([-._]?)(?<host>[a-zA-Z0-9]+)@([a-zA-Z0-9]+([-._][a-zA-Z]+)+))\b/g;

    let emails = [];
    let line;

    while ((line = regex.exec(input)) !== null) {
        emails.push(line[0]);
    }

    console.log(emails.join('\n'));
}

solve('Please contact us at: support@github.com.');
solve('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.');