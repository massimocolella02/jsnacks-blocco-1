let prompt1 = parseInt(prompt('Inserisci un numero'));
let prompt2 = parseInt(prompt('Inserisci un secondo numero'));

if( prompt1 > prompt2 ){
    document.getElementById('ciao').innerHTML= prompt1
} else{
    document.getElementById('ciao').innerHTML= prompt2

}
