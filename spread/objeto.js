let pessoa = {
    nome: "Gabriel",
    idade: 16,
    cargo: "programador"
};

let novapessoa = {
    ...pessoa, //juntar objetos
    anoAtual: 2022,
    cidade: "florianopolis"
}

console.log(novapessoa)