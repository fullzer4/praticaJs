let lista =[1,2,3,4,5,6]

const tantofaz = lista.reduce((inicio,proximo) =>{
    return inicio + proximo
})

console.log(tantofaz);