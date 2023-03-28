let arraydispari= [ ]

for(let i=0; i<6; i++){
    let numero = parseInt(prompt('Inserisci un numero'))
    
    if( numero % 2 != 0 ){
        arraydispari.push(numero)
    }
}

console.log(arraydispari)