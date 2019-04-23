let d = id => document.getElementById(id);

let niz = [];
let testNiz = [];

const dugme = d('Submit');
const reset = d('reset');

// pravi niz

for (let i = 0; i < 35; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * 48) + 1;

    for (let y = 0; y < 35; y++) {
        if (niz[y] == randomNumber) {
            add = false;

        }
    }
    if (add) {
        niz.push(randomNumber)
    } else {
        i--;
    }

}

console.log(niz);


function proveraNiza(a) {
    var counts = [];
    for (var i = 0; i <= a.length; i++) {
        if (counts[a[i]] === undefined) {
            counts[a[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}


function ispisiBrojeve() {

    for (let i = 0; i < niz.length; i++) {
        d(`broj${i}`).innerHTML = `${niz[i]}`
    }

}

function provera() {
    let brojac = 0;
    let x = 1; // id moj broj
    let y = 0;
    for (let i = 0; i < niz.length; i++) {
        //refaktorisanje varijable
        if (i == niz.length - 1 && x <= 6) {
            if (d(`mojbroj${x}`).value == niz[i]) {
                x++;
                brojac++
                i = 0;
            } else {
                x++;
                i = 0;
            }
        }

        if (x <= 6) {
            if (d(`mojbroj${x}`).value == niz[i]) {
                x++;
                brojac++;
                i = 0;
            }
        }

    }

    console.log('brojac je  ' + brojac);


    let max = 0;
    let z = 1
    if (brojac == 6) {
        console.log('radi');

        for (let i = 0; i < niz.length; i++) {
            if (d(`mojbroj${z}`).value == niz[i]) {
                if (i > max) {
                    max = i;
                    z++;
                }
            }
        }
        max++;
    }


    console.log(brojac);
    return [brojac, max];

}

dugme.addEventListener('click', function () {
    testNiz = [];
    for (let i =1 ; i<7 ; i++){
        testNiz.push( parseInt (d(`mojbroj${i}`).value));
    }
    for (let i = 0; i < 6; i++) {
        if (testNiz[i] < 1 || testNiz[i] > 48) {
            d('errorText').innerHTML = "Dozvoljeni su brojevi od 1 do 48";
            return
        }
    }

    for (let i = 1; i < 7; i++) {
        if (d(`mojbroj${i}`).value == "") {
            d('errorText').innerHTML = "Popunite sva polja";
            return
        }
    }

    if (proveraNiza(testNiz)) {
        d('errorText').innerHTML = "Upisite sve razlicite brojeve";
        return
    }

    d('container').style.display = 'grid';
    d('pogodci').style.display = 'block';
    d('test').style.display = 'block';
    d('izvuceni').style.display = 'inline';

    console.log(testNiz);
    d('errorText').innerHTML= ""
    var mesto = provera();
    ispisiBrojeve();
    d('container').style.display="grid";
    d('pogodci').style.display = "inline";
    d('pogodka').innerHTML = mesto[0];

    if (mesto[0] == 6) {
        d('test').innerHTML = `pogodili ste na ${mesto[1]}. mestu`;
    }
    provera1()
});
function provera1() {

    for (let i = 1; i < 7; i++) {
        for (let q = 0; q < niz.length + 1; q++) {
            if (d(`mojbroj${i}`).value
                == niz[q]) {
                d(`broj${q}`).style.background = "green"
                q = 0;
                d(`mojbroj${i}`).classList.toggle("zeleno")
                break
            }
            if (q == niz.length) {
                d(`mojbroj${i}`).classList.toggle("red")
            }
        }

    }
}

reset.addEventListener('click', function () {
    d('container').style.display='none';
    d('pogodci').style.display = 'none';
    d('test').style.display = 'none';
    d('izvuceni').style.display = 'none';

    for(let i = 0 ; i<35 ; i++) {

    
    d(`broj${i}`).style.background = "#d1e0e0"
    }

    niz = [];
    for (let i = 0; i < 35; i++) {
        var add = true;
        var randomNumber = Math.floor(Math.random() * 45) + 1;

        for (var y = 0; y < 45; y++) {
            if (niz[y] == randomNumber) {
                add = false;
            }
        }
        if (add) {
            niz.push(randomNumber)
        } else {
            i--;
        }

    }
    for (let q = 0; q < 35; q++) {
        d(`broj${q}`).innerHTML = ''

    }
    for (let c = 1; c < 7; c++) {
        d(`mojbroj${c}`).value = ''
        d(`mojbroj${c}`).className ='';
    }


})





