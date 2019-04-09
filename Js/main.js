let d = id =>document.getElementById(id);

//inicijalizacije 

const novaIgraDugme = d('novaIgra');
const dugmeLako = d('dugmeLako');
const dugmeTesko = d('dugmeTesko');
const inputBroj = d('inputBox');
const textPolje = d('textOutput');
const pokusajiPolje = d('pokusaji');
const errorMsg = d('errorMsg');
const tezina = d('tezina');

let kompjuterovBroj;
let prethodniPokusaji = [];
let pokusaji = 0 ;
let maxPokusaja = 10;
    let preostaliPokusaji


//funkcije

function init() {
    kompjuterovBroj = Math.floor (Math.random() *100 + 1);
    console.log(kompjuterovBroj);
    novaIgraDugme.style.display = 'none';
}

function novaIgra() {
    window.location.reload();
}

function lakaIgra (){
    maxPokusaja = 10;
    dugmeLako.className = 'activeButton';
    dugmeTesko.className ='';
}

function teskaIgra (){
    maxPokusaja = 5;
    dugmeLako.className = '';
    dugmeTesko.className ='activeButton';
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
    //console.log(typeof(korisnikovBroj));
    if (korisnikovBroj < 1 || korisnikovBroj >100) {
        errorMsg.innerText = "Dozvoljen je broj izmedju 1 i 100"
        return
    }
    errorMsg.innerText = ""
    prethodniPokusaji.push(korisnikovBroj)
    //console.log(prethodniPokusaji);
    d('prethodniPokusaji').innerHTML = prethodniPokusaji;
    pokusaji ++;
    preostaliPokusaji = maxPokusaja - pokusaji

    pokusajiPolje.innerHTML = preostaliPokusaji;

if (prethodniPokusaji.length < maxPokusaja) {
    if (korisnikovBroj > kompjuterovBroj ) {
        textPolje.innerHTML = "Trazeni broj je manji!";
        inputBroj.value = "";

    } else if (korisnikovBroj < kompjuterovBroj) {
        textPolje.innerHTML = "Trazeni broj je veci!";
        inputBroj.value = "";
    }else {
        textPolje.innerHTML = "Pogodili ste broj!" + "<br>Trebalo vam je "  +
        pokusaji +" pokusaja";
        d('container').style.backgroundColor = 'green';
        krajIgre();
    }
} else {
    if (korisnikovBroj > kompjuterovBroj ) {
        textPolje.innerHTML = "Zao mi je, izgubili ste! + <br> Broj je bio " +
        kompjuterovBroj;
        d('container').style.backgroundColor = 'red';
        krajIgre();

    } else if (korisnikovBroj < kompjuterovBroj) {
        textPolje.innerHTML = "Zao mi je, izgubili ste!<br> Broj je bio " +
        kompjuterovBroj;
        d('container').style.backgroundColor = 'red';
        krajIgre();
    }else {
        textPolje.innerHTML = "Pogodili ste broj!" + "<br>Trebalo vam je "  +
        pokusaji +" pokusaja";
        d('container').style.backgroundColor = 'green';
        krajIgre();
    }
}
}



// event listeners
novaIgraDugme.addEventListener ('click', novaIgra)
inputBroj.addEventListener ('change' , poredjenje)
dugmeLako.addEventListener ('click', lakaIgra)
dugmeTesko.addEventListener ('click', teskaIgra)
