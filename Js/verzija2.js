let niz = [];
// let balance = document.getElementById('balance').innerHTML;
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
      
        
    } 


    console.log(brojac);
    return [brojac, max];

}


var dugme = document.getElementById('Submit');

dugme.addEventListener('click', function () {

    var mesto = provera();
    ispisiBrojeve();
    document.getElementById('pogodka').innerHTML = mesto[0];

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
    for (let q = 0; q < 35; q++) {
        document.getElementById(`broj${q}`).innerHTML = ''

    }
    for (let c = 1; c < 7; c++) {
        document.getElementById(`mojbroj${c}`).value = ''
        document.getElementById(`mojbroj${c}`).className ='';
    }


})