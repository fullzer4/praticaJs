let nomes = ["Gabriel", "Pereira", 10];

let { 1:segundonome } = nomes;
let { 0:primeironome, 2:idade } = nomes; //colocar nome nos locais da varivel para ser mais facil puxar
console.log(primeironome, segundonome, idade)