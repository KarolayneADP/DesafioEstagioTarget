//int INDICE = 13, SOMA = 0, K = 0; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let indice = 13;
let soma = 0;

for (let k = 1; k <= indice; k++) {
    soma = soma + k;
}

console.log(soma);