// console.log("Leonardo")
// console.log("Informação")
// console.warn("Aviso")
// console.error("Erro")

// console.table([
//     {id: 1, tarefa: "Estudar JS"},
//     {id: 2, tarefa: "Pratica código"}
// ]);

// console.group("Grupo de logs")
//     console.log("Leonardo")
//     console.log("Informação")
//     console.warn("Aviso")
//     console.error("Erro");
// console.groupEnd()

// console.time("Timer")
// if (1==1) {
//     console.log("Um é igual a um")
// }
// console.timeEnd("Timer")

// // Comentário de uma linha

// /*
// Comentário de várias linhas
// Comentário de várias linhas
// Comentário de várias linhas
// Comentário de várias linhas
// Comentário de várias linhas
// Comentário de várias linhas
// */

// var antigo = "Forma antiga de criar uma varíavel"
// let userName = "Maria"
// const API_URL = "url"

// let texto = "Olá"
// console.log("texto = " + texto + " tipo: " + typeof(texto));

// let isCompleted = false
// console.log("isCompleted = " + isCompleted + " tipo: " + typeof(isCompleted));

// let semValor 
// console.log("semValor = " + semValor + " tipo: " + typeof(semValor));

// let nulo = null
// console.log("nulo = " + nulo + " tipo: " + typeof(nulo));

// let uniqueID = Symbol("id")
// console.log(uniqueID);
// console.log(typeof(uniqueID));


// let bigNumber = 999999999999n
// console.log("bigNumber = " + nulo + " tipo: " + typeof(bigNumber));



// let task = {
//   id: 1, // Propriedade 1
//   title: "Aprender JavaScript", // Propriedade 2
//   completed: false, // Propriedade 3
//   assignee: { // Propriedade 4
//     name: "João", // Propriedade 4.1
//     email: "joao@example.com" // Propriedade 4.2
//   },
// };

// const tasks = [

//     {
//         id: 1, 
//         title: "Aprender JavaScript", 
//         completed: false, 
//         assignee: { 
//             name: "João", 
//             email: "joao@example.com" 
//         },
//     },

//     {
//         id: 2, 
//         title: "Aprender Python", 
//         completed: false, 
//         assignee: { 
//             name: "João", 
//             email: "joao@example.com" 
//         },
//     },

//     {
//         id: 3, 
//         title: "Estudar Storytelling", 
//         completed: false, 
//         assignee: { 
//             name: "João", 
//             email: "joao@example.com" 
//         },
//     }

// ]

// console.table(tasks);
// console.log(typeof(tasks));

// let hoje = new Date()
// console.log(hoje);

// let amanha = new Date("03-19-2026")
// console.log(amanha);

// let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// console.log(pattern.test("+55(11)92299-0899")); // true
// console.log(pattern.test("+55(11)2299-0899"));  // true
// console.log(pattern.test("Leonardo"));  // false

// let convertido1 = String(42)
// console.log(convertido1);
// console.log(typeof(convertido1));

// let convertido2 = 42+""
// console.log(convertido2);
// console.log(typeof(convertido2));

// let convertido3 = Number("42")
// console.log(convertido3);
// console.log(typeof(convertido3));

// let convertido4 = parseInt("42")
// console.log(convertido4);
// console.log(typeof(convertido4));

// let convertido5 = parseFloat("42.1")
// console.log(convertido5);
// console.log(typeof(convertido5));

// let convertido6 = Boolean("texto")
// console.log(convertido6);
// console.log(typeof(convertido6));

// let convertido7 = Boolean("")
// console.log(convertido7);
// console.log(typeof(convertido7));

// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...

// console.log(a % b); // 1
// console.log(a ** b); // 1000

// let contador1 = 0
// let contador2 = 0

// console.log(++contador1);
// console.log(++contador1);
// console.log(contador1);

// console.log(contador2++);
// console.log(contador2++);
// console.log(contador2);


// //no contador2 ele imprime primeiro depois incrementa e no contador1 ele incrementa e depois imprime, por isso a divergencia

let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)
        
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";