function calcular(operacao) {
const n1 = Number(document.getElementById('n1').value)
const n2 = Number(document.getElementById('n2').value)

let resultado
let campo
let texto

switch (operacao) {
case '+':
resultado = somar(n1, n2)
campo = 'res-soma'
texto = 'A soma dos números é: '
break

case '-':
resultado = subtrair(n1, n2)
campo = 'res-sub'
texto = 'A subtração dos números é: '
break

case '*':
resultado = multiplicar(n1, n2)
campo = 'res-mult'
texto = 'A multiplicação dos números é: '
break

case '/':
resultado = dividir(n1, n2)
campo = 'res-div'
texto = 'A divisão dos números é: '
break

case '%':
resultado = porcentagem(n1, n2)
campo = 'res-mod'
texto = 'O módulo dos números é: '
break

case '**':
resultado = exponencial(n1, n2)
campo = 'res-exp'
texto = 'A exponenciação dos números é: '
break
}

document.getElementById(campo).innerHTML = texto + resultado
}

function somar(n1, n2){
    return (n1) + (n2)
}
function subtrair(n1, n2){
    return (n1) - (n2)
}
function multiplicar(n1, n2){
    return (n1) * (n2)
}
function dividir(n1, n2){
     if (n2 === 0) {
        return 'Erro, divisão por zero não existe!'
    }
    return n1 / n2
}
function porcentagem(n1, n2){
    return (n1) % (n2)
}
function exponencial(n1, n2){
    return (n1) ** (n2)
}