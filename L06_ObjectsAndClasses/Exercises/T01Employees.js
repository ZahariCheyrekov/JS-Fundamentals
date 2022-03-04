function solve(arr) {
    let employees = [];

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let personalNumber = name.length;

        employees.push(new Employee(name, personalNumber));
    }

    employees.forEach((emp) => console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`));
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);