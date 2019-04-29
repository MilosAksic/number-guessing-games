let d = id => document.getElementById(id);

//inicijalizacija

const zadatiBroj = d('zadatiBroj');
const dugmeVise = d('vise');
const dugmeManje = d('manje');
const score = d('score');
const textMsg = d ('textMsg');
const newGame = d ('newGame');

let prethodniBrojevi = []
let rezultat = 0 ;
let kompjuterovBroj ;

//funkcije
function upisBroja (){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    ubacivanjeUNiz();
    
}

function ubacivanjeUNiz () {
    zadatiBroj.innerHTML = kompjuterovBroj;
    prethodniBrojevi.push(kompjuterovBroj);
    console.log(prethodniBrojevi);
}

function novaIgra() {
    window.location.reload();
}

 // event listneri

 window.addEventListener('load', upisBroja);
 newGame.addEventListener('click', novaIgra)

 dugmeVise.addEventListener ('click', function(){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    console.log(kompjuterovBroj);
    
    if (kompjuterovBroj == prethodniBrojevi[prethodniBrojevi.length-1]) {
        kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    }

    if (kompjuterovBroj > prethodniBrojevi[prethodniBrojevi.length-1]){
        textMsg.innerText = "Pogodili ste" ; 
        rezultat ++;
        console.log('radi');
        score.innerHTML = rezultat;
        ubacivanjeUNiz();

    }

    if(kompjuterovBroj < prethodniBrojevi[prethodniBrojevi.length-1]) {
        textMsg.innerText = "Kraj igre , sledeci broj je bio : " +kompjuterovBroj ; 

    }
 })

 dugmeManje.addEventListener ('click', function(){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    console.log(kompjuterovBroj);
    
    if (kompjuterovBroj == prethodniBrojevi[prethodniBrojevi.length-1]) {
        kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    }

    if (kompjuterovBroj < prethodniBrojevi[prethodniBrojevi.length-1]){
        textMsg.innerText = "Pogodili ste" ; 
        rezultat ++;
        console.log('radi');
        score.innerHTML = rezultat;
        ubacivanjeUNiz();

    }

    if(kompjuterovBroj > prethodniBrojevi[prethodniBrojevi.length-1]) {
        textMsg.innerText = "Kraj igre, sledeci broj je bio: " + kompjuterovBroj ; 

    }
 })