function cadastrar(usuarios, ...novousuario){
    let totalusuarios = [ //lista para a juncao deles
        ...usuarios,
        ...novousuario //juncao deles
    ];

    return console.log(totalusuarios)
}

let usuarios = ["Matheus", "Joao"] //usuarios ja existentes

let novousuario = cadastrar(usuarios, "Henrique", "Lucas") //novos usuarios