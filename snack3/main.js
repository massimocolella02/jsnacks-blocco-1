

let somma= 0;

for( let i= 0; i < 10; i++ ){
    const numero= parseInt(prompt('Inserisci un numero'));
    somma = somma + numero
}
document.getElementById('ciao').innerHTML= somma