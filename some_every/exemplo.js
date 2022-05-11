let nomes = [
    {nome: "Gabriel", idade: 18},
    {nome: "Gabriel2", idade: 8},
    {nome: "Gabriel4", idade: 12}
];

if(nomes.every(nome => nome.idade >= 18)){
    console.log("maiores de 18")
} else{
    console.log("nao pode beber");
}