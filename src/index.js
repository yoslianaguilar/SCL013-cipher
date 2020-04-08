function cifraMen() {
    let men_code = "";
    let mensa = "";
    let num = document.getElementById("desplazar").value;
    let largo = document.getElementById("mensaje_cifrar").value;
    let largo1 = document.getElementById("mensaje_cifrar").value.length;

    let Cifrar = window.cipher.cifrar(cifraMen, num);

    document.getElementById("mensaje_cifrado").value = mensa;

    Cifrar.addEventListener("click", cifraMen)
}


function deCifra() {
    let men_code1 = "";
    let mensa1 = "";
    let num1 = document.getElementById("desplazar").value;
    let largo2 = document.getElementById("mensaje_cifrar").value;
    let largo3 = document.getElementById("mensaje_cifrar").value.length;

    let Decifrar = window.cipher.decifrar(deCifra, num1);
    Decifrar.addEventListener("click", deCifra)

    document.getElementById("mensaje_cifrado").value = mensa1;
}

