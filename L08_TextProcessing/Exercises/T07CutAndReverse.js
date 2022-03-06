function solve(string) {
    let firstString = string.substring(0, string.length / 2).split('').reverse().join('');
    let secondString = string.substring(string.length / 2).split('').reverse().join('');

    console.log(firstString);
    console.log(secondString);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');