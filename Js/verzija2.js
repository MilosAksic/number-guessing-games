let niz = [];
let balance = document.getElementById('balance').innerHTML;

// pravi niz

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



function ispisiBrojeve() {

    for (let i = 0; i < niz.length; i++) {

        document.getElementById(`broj${i}`).innerHTML = `${niz[i]}      `
    }

}

function provera() {
    var ulog = document.getElementById('ulog').value;
    var dobitak = 0;
    let balance1 = parseInt(balance);
    console.log(balance1);
    let brojac = 0;
    let x = 1;
    let y = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i == niz.length - 1 && x <= 6) {
            if (document.getElementById(`mojbroj${x}`).value == niz[i]) {
                x++;
                brojac++
                i = 0;
            } else {
                x++;
                i = 0;
            }
        }


        if (x <= 6) {
            if (document.getElementById(`mojbroj${x}`).value == niz[i]) {
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
            if (document.getElementById(`mojbroj${z}`).value == niz[i]) {
                if (i > max) {
                    max = i;
                    z++;
                }
            }
        }
        max++;

        switch (max) {
            case 6:
                dobitak = ulog * 25000;
                break;
            case 7:
                dobitak = ulog * 15000;
                break;
            case 8:
                dobitak = ulog * 7500;
                break;
            case 9:
                dobitak = ulog * 3000;
                break;
            case 10:
                dobitak = ulog * 1250;
                break;
            case 11:
                dobitak = ulog * 700;
                break;
            case 12:
                dobitak = ulog * 350;
                break;
            case 13:
                dobitak = ulog * 250;
                break;
            case 14:
                dobitak = ulog * 175;
                break;
            case 15:
                dobitak = ulog * 125;
                break;
            case 16:
                dobitak = ulog * 100;
                break;
            case 17:
                dobitak = ulog * 90;
                break;
            case 18:
                dobitak = ulog * 80;
                break;
            case 19:
                dobitak = ulog * 70;
                break;
            case 20:
                dobitak = ulog * 60;
                break;
            case 21:
                dobitak = ulog * 50;
                break;
            case 22:
                dobitak = ulog * 35;
                break;
            case 23:
                dobitak = ulog * 25;
                break;
            case 24:
                dobitak = ulog * 20;
                break;
            case 25:
                dobitak = ulog * 15;
                break;
            case 26:
                dobitak = ulog * 12;
                break;
            case 27:
                dobitak = ulog * 10;
                break;
            case 28:
                dobitak = ulog * 8;
                break;
            case 29:
                dobitak = ulog * 7;
                break;
            case 30:
                dobitak = ulog * 6;
                break;
            case 31:
                dobitak = ulog * 5;
                break;
            case 32:
                dobitak = ulog * 4;
                break;
            case 33:
                dobitak = ulog * 3;
                break;
            case 34:
                dobitak = ulog * 2;
                break;
            case 35:
                dobitak = ulog * 1;
                break;
            default:
                dobitak = 0;


        }
        balance1 = balance1 + dobitak;
    } else {
        balance1 = balance1 - ulog;
    }


    console.log(brojac);
    return [brojac, max, dobitak, balance1];

}


var dugme = document.getElementById('Submit');

dugme.addEventListener('click', function () {

    var mesto = provera();
    ispisiBrojeve();
    document.getElementById('pogodka').innerHTML = mesto[0];
    document.getElementById('dobitak').innerHTML = mesto[2];
    document.getElementById('balance').innerHTML = mesto[3];
    if (mesto[0] == 6) {
        document.getElementById('test').innerHTML = `pogodili ste na ${mesto[1]}. mestu`;
    }
    provera1()

});
function provera1() {

    for (let i = 1; i < 7; i++) {
        for (let q = 0; q < niz.length + 1; q++) {
            if (document.getElementById(`mojbroj${i}`).value
                == niz[q]) {
                q = 0;
                document.getElementById(`mojbroj${i}`).classList.toggle("zeleno")
                break
            }
            if (q == niz.length) {
                document.getElementById(`mojbroj${i}`).classList.toggle("red")
            }
        }

    }
}

document.getElementById('reset').addEventListener('click', function () {
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
    for (let q = 0; q < 36; q++) {
        document.getElementById(`broj${q}`).innerHTML = ' '

    }
})