export function cifrar(mensaje, desplazamiento) {
    let codigoAscii = "";
    let resultado = "";
    const largo = mensaje.length
    for (let posicion = 0; posicion < largo; posicion++) {
        var letraEnPosicion = mensaje.charCodeAt(posicion);
        codigoAscii = ((letraEnPosicion - 65 + parseInt(desplazamiento)) % 26 + 65);

        resultado = resultado + String.fromCharCode(codigoAscii);
    }
    return resultado;
}

export function descifrar(mensaje, desplazamiento) {
    let codigoAscii = "";
    let resultado = "";
    const largo = mensaje.length;
    for (let posicion = 0; posicion < largo; posicion++) {
        codigoAscii = ((mensaje.charCodeAt(posicion) + 65 - parseInt(desplazamiento)) % 26 + 65);

        resultado = resultado + String.fromCharCode(codigoAscii);
    }
    return resultado;
}