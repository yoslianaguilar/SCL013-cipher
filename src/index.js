function validar() {
    let men_code = "";
    let mensa = "";
    let num = document.getElementById("desplazar").value;
    let largo = document.getElementById("mensaje_cifrar").value;
    let largo1 = document.getElementById("mensaje_cifrar").value.length;

    for (a = 0; a <= largo1; a++) {
        men_code = (largo.charCodeAt([a]) - 65 + (num)) % 26 + 65;
        //document.write(men_code + "<br>");
        mensa += String.fromCharCode(men_code)
        //document.write(mensa + "<br>"); 
    }
    document.getElementById("mensaje_cifrado").value = mensa;

}



