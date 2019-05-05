const d = id =>document.getElementById(id);

//inicijalizacije 

const novaIgraDugme = d('novaIgra');
const dugmeLako = d('dugmeLako');
const dugmeTesko = d('dugmeTesko');
const inputBroj = d('inputBox');
const textPolje = d('textOutput');
const pokusajiPolje = d('pokusaji');
const errorMsg = d('errorMsg');
const tezina = d('tezina');
const pokusajiDiv = d('pokusajiDiv');

let kompjuterovBroj;
let prethodniPokusaji = [];
let pokusaji = 0 ;
let maxPokusaja = 10;
let preostaliPokusaji;

//funkcije

function init() {
    kompjuterovBroj = Math.floor (Math.random() *100 + 1);
    novaIgraDugme.style.display = 'none';
}

function novaIgra() {
    window.location.reload();
}

function lakaIgra (){
    maxPokusaja = 10;
    pokusajiPolje.innerHTML = maxPokusaja
    dugmeLako.className = 'activeButton';
    dugmeTesko.className ='';
    dugmeTesko.style.display = 'none';
    tezina.style.display = 'none';

}

function teskaIgra (){
    maxPokusaja = 5;
    pokusajiPolje.innerHTML = maxPokusaja
    dugmeLako.className = '';
    dugmeTesko.className ='activeButton';
    dugmeLako.style.display = 'none';
    tezina.style.display = 'none';

}

function krajIgre (){
    novaIgraDugme.style.display = 'inline';
    dugmeLako.style.display = 'none';
    dugmeTesko.style.display ='none';
    tezina.style.display = 'none';
    inputBroj.setAttribute ('readonly', 'readonly');

}

function poredjenje (){
    var korisnikovBroj = " "+ d('inputBox').value;
    if (korisnikovBroj < 1 || korisnikovBroj >100) {
        errorMsg.innerText = "Dozvoljen je broj izmedju 1 i 100"
        return;
    }
    errorMsg.innerText = "";
    pokusajiDiv.style.display="block";
    prethodniPokusaji.push(korisnikovBroj);
    d('prethodniPokusaji').innerHTML = prethodniPokusaji;
    pokusaji ++;
    preostaliPokusaji = maxPokusaja - pokusaji

    pokusajiPolje.innerHTML = preostaliPokusaji;

if (prethodniPokusaji.length < maxPokusaja) {
    if (korisnikovBroj > kompjuterovBroj ) {
        textPolje.innerHTML = "Traženi broj je manji!";
        inputBroj.value = "";

    } else if (korisnikovBroj < kompjuterovBroj) {
        textPolje.innerHTML = "Traženi broj je veći!";
        inputBroj.value = "";
    }else {
        textPolje.innerHTML = "Pogodili ste broj!" + "<br>Trebalo vam je "  +
        pokusaji +" pokušaja";
        d('container').style.background = 'linear-gradient(to right, #000000, #0f9b0f)';
        krajIgre();
    }
} else {
    if (korisnikovBroj > kompjuterovBroj ) {
        textPolje.innerHTML = "Žao mi je, izgubili ste! + <br> Broj je bio " +
        kompjuterovBroj;
        d('container').style.background = 'linear-gradient(to right, #000000, #0f9b0f)';
        krajIgre();

    } else if (korisnikovBroj < kompjuterovBroj) {
        textPolje.innerHTML = "Zao mi je, izgubili ste!<br> Broj je bio " +
        kompjuterovBroj;
        d('container').style.background = 'linear-gradient(to right, #f85032, #e73827)';
        krajIgre();
    }else {
        textPolje.innerHTML = "Pogodili ste broj!" + "<br>Trebalo vam je "  +
        pokusaji +" pokušaja";
        d('container').style.background = 'linear-gradient(to right, #000000, #0f9b0f)';
        krajIgre();
    }
}
}

// event listeners
novaIgraDugme.addEventListener ('click', novaIgra)
inputBroj.addEventListener ('change' , poredjenje)
dugmeLako.addEventListener ('click', lakaIgra)
dugmeTesko.addEventListener ('click', teskaIgra)
window.addEventListener('load', init)
