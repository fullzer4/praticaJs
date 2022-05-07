const pessoa = {
    nome: "Gabriel",
    sobrenome:"Pereira",
    idade: 10,
    cargo: "Desenvolvedor"
}
let { nome } = pessoa; //retornar valor

let { cargo:programdor } = pessoa; //muda a 
//mas nao muda o valor na variavel pessoa