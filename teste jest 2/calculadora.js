
function calculadora(operacao, numeros) {
    let resultado = 0
    switch (operacao) {
        case '+':
            for (let i = 0; i < numeros.length; i++) {
                resultado += numeros[i];
            }
            return resultado;
            break;
        case '-':
            for (let i = 0; i < numeros.length; i++) {
                resultado -= numeros[i];
            }
            return resultado;
            break;
            case '*':
            resultado = 1;
            for (let i = 0; i < numeros.length; i++) {
                resultado *= numeros[i];
            }
            return resultado;
            break;
            



    };
}

console.log(calculadora('-', [1, 53, 6, 8]))
console.log(calculadora('+', [1, 53, 6, 8]))
console.log(calculadora('*', [1, 53, 6, 8]))

module.exports=calculadora;

