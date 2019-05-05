
let d = id => document.getElementById(id);

//inicijalizacije

const zadatiBroj = d('zadatiBroj');
const dugmeVise = d('vise');
const kartaManje = d('kartaManje');
const kartaVise = d('kartaVise');
const dugmeManje = d('manje');
const score = d('score');
const scoreCard = d('scoreCard')
const textMsg = d ('textMsg');
const textMsg1 = d('textMsg1')
const newGame = d ('newGame');
const karta = d('slika')
const igraBrojeva = d('dugmeBrojevi')
const igraKarata = d('dugmeKarte')
 
//promenljive
let prethodniBrojevi = [];
let prethodneKarte = []
let rezultat = 0 ;
let rezultatKarte = 0;
let kompjuterovBroj ;
let brojKarte;
let slike = [];



//funkcije
function upisBroja (){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    ubacivanjeUNiz();
    
}

function upisiKartu (){
    brojKarte = Math.floor (Math.random() *13 + 2);
    ubacivanjeKarte()
}

function ubacivanjeKarte() {
    karta.src = `images/karta${brojKarte}.png`;
    prethodneKarte.push(brojKarte);
};



function ubacivanjeUNiz () {
    zadatiBroj.innerHTML = kompjuterovBroj;
    prethodniBrojevi.push(kompjuterovBroj);
}

function novaIgra() {
    window.location.reload();
}
function disablingCards (){
    kartaManje.disabled = true;
    kartaVise.disabled = true;
}
function resetBrojeva () {
    rezultat = 0;
    prethodniBrojevi = [];
    textMsg.innerText = "Izaberite manje ili vise" ; 
    dugmeVise.disabled = false;
    dugmeManje.disabled = false;
    score.innerHTML = rezultat;
    upisBroja();

}
function resetKarte () {
    rezultatKarte = 0;
    prethodneKarte = [];
    textMsg1.innerText = "Izaberite manje ili vise" ; 
    kartaManje.disabled = false;
    kartaVise.disabled = false;
    scoreCard.innerHTML = rezultatKarte;
    upisiKartu();
}

 // event listneri

 window.addEventListener('load', upisBroja);
 window.addEventListener('load', upisiKartu);
 newGame.addEventListener('click', novaIgra);
 d('newGameCard').addEventListener('click', novaIgra)


 dugmeVise.addEventListener ('click', function(){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    console.log(kompjuterovBroj);
    
    while (kompjuterovBroj == prethodniBrojevi[prethodniBrojevi.length-1]) {
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
        dugmeVise.disabled = true;
        dugmeManje.disabled = true;

    }
 });

 dugmeManje.addEventListener ('click', function(){
    kompjuterovBroj = Math.floor (Math.random() *50 + 1);
    console.log(kompjuterovBroj);
    
    while (kompjuterovBroj == prethodniBrojevi[prethodniBrojevi.length-1]) {
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
        dugmeVise.disabled = true;
        dugmeManje.disabled = true;
    }
 });

 //karte 

 kartaVise.addEventListener('click', function(){
    brojKarte = Math.floor (Math.random() *13 + 2);
    console.log(brojKarte);

    while (brojKarte == prethodneKarte[prethodneKarte.length -1]) {
        brojKarte = Math.floor (Math.random() *13 + 2);
    }
    if (brojKarte > prethodneKarte[prethodneKarte.length -1]) {
        textMsg1.innerText = "Pogodili ste" ; 
        rezultatKarte ++;
        console.log('radi');
        scoreCard.innerHTML = rezultatKarte;
        ubacivanjeKarte();
    }

    if (brojKarte < prethodneKarte[prethodneKarte.length -1]) {
        switch(brojKarte) {
            case 11:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Zandar (12) " ; 
            disablingCards();
            break;
            case 12:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Dama (13) "  ; 
            disablingCards();
            break;
            case 13:    
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Kralj (14) "  ; 
            disablingCards();
            break;
            case 14: 
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Kec "  ; 
            disablingCards();
            break;
            default:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila : " + brojKarte ; 
            disablingCards();
            break;

        }   
    }

 })

 kartaManje.addEventListener ('click', function(){
    brojKarte = Math.floor (Math.random() *13 + 2);
    console.log(brojKarte);

    while (brojKarte == prethodneKarte[prethodneKarte.length -1]) {
        brojKarte = Math.floor (Math.random() *13 + 2);
    }
    if (brojKarte < prethodneKarte[prethodneKarte.length -1]) {
        textMsg1.innerText = "Pogodili ste" ; 
        rezultatKarte ++;
        console.log('radi');
        scoreCard.innerHTML = rezultatKarte;
        ubacivanjeKarte();
    }

    if (brojKarte > prethodneKarte[prethodneKarte.length -1]) {
        switch(brojKarte) {
            case 11:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Zandar (12) " ; 
            disablingCards();
            break;
            case 12:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Dama (13) "  ; 
            disablingCards();
            break;
            case 13:    
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Kralj (14) "  ; 
            disablingCards();
            break;
            case 14: 
            textMsg1.innerText = "Kraj igre , sledeca karta je bila Kec "  ; 
            disablingCards();
            break;
            default:
            textMsg1.innerText = "Kraj igre , sledeca karta je bila : " + brojKarte ; 
            disablingCards();
            break;

        }   
    }
 });

 igraBrojeva.addEventListener('click', function(){
     d('brojeviPanel').style.display = "block"
     d('izbor').style.display = "none"

 })

 igraKarata.addEventListener('click', function(){
    d('kartePanel').style.display = "block"
    d('izbor').style.display = "none"

})

d('resetBroj').addEventListener('click', resetBrojeva);
d('resetKarte').addEventListener('click', resetKarte);