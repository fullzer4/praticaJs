function cadastroPessoa(info){
    let novosDados = {
        ...info, //junta objetos
        cargo: "programador",
        staus: 1,
        codigo: "32432452353452"
    }
    return novosDados
}

console.log(cadastroPessoa({nome: "Gabriel", sobrenome: "Pereira", ano: 2022}));