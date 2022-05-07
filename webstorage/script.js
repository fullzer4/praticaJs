var nome = '';

if (typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("digite seu nome")
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;