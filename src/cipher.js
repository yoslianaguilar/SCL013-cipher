export function encode(mensaje, desplazamiento) {
    let codigoAscii = "";
    let resultado = "";
    const largo = mensaje.length // obtiene el largo total del mensaje a cifrar
    for (let posicion = 0; posicion < largo; posicion++) { // este for recorre desde la primera letra del mensaje hasta la ultima
        var letraEnPosicion = mensaje.charCodeAt(posicion);
        codigoAscii = ((letraEnPosicion - 65 + parseInt(desplazamiento)) % 26 + 65);

        resultado = resultado + String.fromCharCode(codigoAscii);
    }
    return resultado;
}

export function de(mensaje, desplazamiento) {
    let codigoAscii = "";
    let resultado = "";
    const largo = mensaje.length; // obtiene el largo total del mensaje a cifrar
    for (let posicion = 0; posicion < largo; posicion++) { // este for recorre desde la primera letra del mensaje hasta la ultima
        codigoAscii = ((mensaje.charCodeAt(posicion) + 65 - parseInt(desplazamiento)) % 26 + 65); // convierte en codigo ascii cada letra del mensaje y la desplaza segun el numero de desplazamientos que indico el usuario

        resultado = resultado + String.fromCharCode(codigoAscii); // convierte el mensaje de codigo ascii a
    }
    return resultado;
}