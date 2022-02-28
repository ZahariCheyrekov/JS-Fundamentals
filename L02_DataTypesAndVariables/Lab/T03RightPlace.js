function solve(first, character, second) {
    const result = first.replace('_', character);
    const output = result === second ? 'Matched' : 'Not Matched';

    console.log(output);
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');