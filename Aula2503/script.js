let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

console.log('----------------------------------------');


let idade = 16;
let temCarteira = true;

// AND (&&) - ambas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (idade < 18 || temCarteira == false) {
  console.log("Não pode dirigir");
}

// NOT (!) - inverte o valor booleano
if (!temCarteira) {
  console.log("Precisa de carteira");
}

if (idade < 18) {
    console.log("Não é maior de idade");
    
}

console.log('----------------------------------------');

let tarefaConcluida = true;

if (tarefaConcluida) {
    console.log("A tarefa está concluída!");
}

else {
    console.log("A tarefa não concluída!");
}

console.log('----------------------------------------');


let prioridade = 15; // 1: baixa, 2: média, 3: alta

if (prioridade === 3) {
    console.log("Prioridade Alta");
} 

else if (prioridade ===2) {
    console.log("Prioridade Media");
}

else if (prioridade === 1) {
    console.log("Prioridade Baixa");
}

else {
    console.log("Prioridade desconhecida");
}

console.log('----------------------------------------');

let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.

switch (diaSemana) {

case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("Dia inválido");
    break;
}

console.log('----------------------------------------');

for (let i = 0; i < 5; i++) {
  console.log("Contagem:", i);
}

console.log('----------------------------------------');

let contador = 0;
while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}

console.log('----------------------------------------');

let numero = 0;
do {
  console.log("Número é:", numero);
  numero++;
} while (numero < 5);