let prompt1 = prompt('Scrivi una parola');
let prompt2 = prompt('Scrivi un altra parola');

if ( prompt1.length > prompt2.length ){
    document.getElementById('ciao').innerHTML= prompt1
} else if ( prompt1.length === prompt2.length ){
    document.getElementById('ciao').innerHTML= prompt1 +" Sono di uguale lunghezza"
} else{
    document.getElementById('ciao').innerHTML= prompt2
}