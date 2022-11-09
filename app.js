/* variávei */
var nome = 'Dant'
let sobrenome = 'Diego' // vamos utilizar essa formula
nomedomeio = 'Rodrigo'

let n1 = 2
let n2 = 9.5
let comida = 'maçã'
let fumante = false

console.log(n1, n2, comida, fumante)

// tipos de dados
console.log(typeof n1) //2 é number
console.log(typeof n2) // 9.5 é number 
console.log(typeof comida) // 'maça' é string
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', ' moto', 'avião'] // array

console.log(typeof veiculos) // todo array é do tipo object em js

let salvar = function () {

}
console.log(typeof salvar) // salvar é do tipo function

/* Estrutura de decisão */
/*
if (condição){
    valor se a condição for verdadeira 
} 

else {
    valor se a condição for falsa
}
*/
let nota = 10
if (nota >= 5) { // if mais visto, com else 
    console.log("Passou")
}
else {
    console.log("Reprovou")
}

if (nota >= 5) {
    console.log("Parabéns, está aprovado!!! :> ")
}
if (nota >= 7) { // if com + condição
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

let dia = 1
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log(" Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log(" Sexta ")
        break
    case 7:
        console.log("Sabado")
        break
default:
    console.log("Dia Inválido!!! ")
}

/* Estrutura de repetição */
let contador = 1
while ( contador <= 10 ){
    console.log(contador)
    //contador = contador + 1
    contador++ //contador = contador = 1
}

for(let contador2 = 10; contador2<=20; contador2++){
console.log(console2)
}

/*while(condição){
    código do laço de repetição
} */

/*for (inicialização ; condição; incremento){
    codigo do laço de repetição
}





let frutas = ['']
for 