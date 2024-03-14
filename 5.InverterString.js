function inverterString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

let minhaString = 'Sou a Nova Estagiária Target';
let inverterMinhaString = inverterString(minhaString);

console.log("String Original:", minhaString);
console.log("String Invertida:", inverterMinhaString);