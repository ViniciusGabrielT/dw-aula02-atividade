console.log("\n== 1) Tipos primitivos + typeof ==\n")

{
let string = "abc"
console.log(typeof string) // string

let number = 123
console.log(typeof number) // number

let boolean = true
console.log(typeof boolean) // boolean

let undefined
console.log(typeof undefined) // undefined

let variavel_null = null
console.log(typeof variavel_null) // object -> valor primitivo que representa a ausência intencional de qualquer valor de um objeto

let bigint = 2n
console.log(typeof bigint) // bigint

let symbol = Symbol('simbolo')
console.log(typeof symbol) // symbol
}

console.log("\n== 2) BigInt e Symbol ==\n")

{
num = 10n

console.log(num) // 10n
console.log(typeof num) // bigint

let symbolA = Symbol('simbolo A')
let symbolB = Symbol('simbolo B')

console.log(symbolA === symbolB) // false
console.log(typeof symbolA) // symbol
console.log(typeof symbolB) // symbol
}

// Faça pelo menos 2 exemplos matemáticos, 2 lógicos e 3 de comparação.
// Obrigatório incluir == vs === em um exemplo.
console.log("\n== 3) Operadores matemáticos, lógicos e comparação ==\n")

{
// exemplo matemático #1
console.log(5+1) // 6
// exemplo matemático #2
console.log(5-1) // 4

x=1
y=2
z=3

// exemplo lógico/comparação #1
console.log(x>y || y<z) // true

// exemplo lógico/comparação #2
console.log(x==1 && y<5) // true

// exemplo comparação #3
a=2
b='2'

console.log(a==b) // true
console.log(a===b) // false

}

// Mostrar 2 + "2" e 2 + (+"2") com os resultados comentados.
// Mostrar pelo menos mais 1 exemplo onde o + vira concatenação.
console.log("\n== 4) Concatenação e conversão dinâmica ==\n")

{
console.log(2 + "2") // 22 -> quando existe uma string, a concatenação considera o restante como string
console.log(2 + (+"2")) // 4 -> (+"n") converte a string para numero

console.log("node"+".js") // node.js

}

// Mostrar que {} sozinho cria um bloco.
// Mostrar “de dentro pra fora” com const/let (não pode acessar fora).
// Mostrar “de fora pra dentro” (variável de fora usada dentro).
// Mostrar permissividade do var vazando do if para fora.
console.log("\n== 5) Escopo léxico e blocos {} ==\n")

{
const x=10
let y=20
var z=30

{
    const x=5
    let y=10
    var z=15
}

console.log(x, y, z) // 10 20 15

}

// Usar const bloco = "valor" fora.
// Dentro de um if, imprimir o bloco de fora, criar um bloco interno { const bloco = "outro valor" },
    // imprimir dentro e depois imprimir novamente o de fora.
// O console deve deixar claro que o const de fora não foi alterado.
console.log("\n== 6) Shadowing com const ==\n")

{
const bloco = "valor"

if(true) console.log(bloco) // valor

{
    const bloco = "outro valor"
    console.log(bloco) // outro valor
}

console.log(bloco) // valor

}

// Criar uma string, chamar um método que “parece mudar” (ex: toUpperCase) sem reatribuir e imprimir.
// Reatribuir e imprimir o novo valor.
console.log("\n== 7) Imutabilidade ==\n")

{
string = "string"
console.log(string.toUpperCase()) // STRING

novaString = string.toUpperCase()
console.log(novaString) // STRING

}

// Fazer o clássico A / setTimeout(B, 0) / C e comentar a ordem real.
// Fazer um segundo exemplo com dois timeouts (0 e 100) e comentar a ordem real.
// No topo dessa seção, imprimir uma frase curta explicando “entra na fila e roda depois do código atual”.
console.log("\n== 8) Assincronismo com setTimeout ==\n")

{
// setTimeout() => “entra na fila e roda depois do código atual”

A=1
B=2
C=3

// exemplo #1
console.log(A) // 1

setTimeout(() => {
  console.log(B); // 2
}, 0);

console.log(C) // 3

// ordem real: 1 3 2

// exemplo #2

setTimeout(() => {
  console.log(A); // 1
}, 0);

setTimeout(() => {
    console.log(B); // 2
}, 100);

console.log(C) // 3

// ordem real: 3 1 2
}