function solve(grade) {
    let gradeName;

    if (grade < 3.00) {
        gradeName = 'Fail';
    } else if (grade < 3.50) {
        gradeName = 'Poor';
    } else if (grade < 4.50) {
        gradeName = 'Good';
    } else if (grade < 5.50) {
        gradeName = 'Very good';
    } else {
        gradeName = 'Excellent';
    }

    if (grade < 3.00) {
        grade = 2;
    } else {
        grade = grade.toFixed(2);
    }

    console.log(`${gradeName} (${grade})`);
}

solve(3.33);
solve(4.50);
solve(2.99);