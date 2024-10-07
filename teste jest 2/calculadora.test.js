const calculadora = require("./calculadora")


test('verifique a subtração dos numeros dentro do array deve ser igual - 66', () => {
    expect(calculadora('-', [1, 53, 6, 8])).toBe(-68)
    
}
)
test('verifique a adição dos numeros dentro do array deve ser igual 68', () => {
    expect(calculadora('+', [1, 53, 6, 8])).toBe(68)
    
})
test('verifique a multiplicação dos numeros dentro do array deve ser 2544', () => {
    expect(calculadora('*', [1, 53, 6, 8])).toBe(2544)
    
})
