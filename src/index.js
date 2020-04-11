Cifrar.addEventListener("click", cifraMen)
function cifraMen() {
    let men_code = "";
    let mensa = "";
    let num = document.getElementById("desplazar").value;
    let largo = document.getElementById("mensaje_cifrar").value;
    let largo1 = document.getElementById("mensaje_cifrar").value.length;


    for (a = 0; a < largo1; a++) {
        men_code = ((largo.charCodeAt([a]) - 65 + parseInt(num)) % 26 + 65);
        //document.write(men_code + "<br>");
        mensa = mensa + String.fromCharCode(men_code);
        //document.write(mensa + "<br>"); 
    }
    document.getElementById("mensaje_cifrado").value = mensa;
}

Decifrar.addEventListener("click", deCifra)

function deCifra() {
    let men_code1 = "";
    let mensa1 = "";
    let num1 = document.getElementById("desplazar").value;
    let largo2 = document.getElementById("mensaje_cifrar").value;
    let largo3 = document.getElementById("mensaje_cifrar").value.length;

    for (b = 0; b < largo3; b++) {
        men_code1 = ((largo2.charCodeAt([b]) + 65 - parseInt(num1)) % 26 + 65);
        //document.write(String(men_code1));
        mensa1 = mensa1 + String.fromCharCode(men_code1)
        //document.write(String(mensa1)); 
    }
    document.getElementById("mensaje_cifrado").value = mensa1;
}



