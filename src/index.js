import { cifrar, descifrar } from './cipher.js'

document.getElementById('Cifrar').addEventListener('click', cifrarMensaje)
document.getElementById('Descifrar').addEventListener('click', descifrarMensaje)

export function cifrarMensaje() {

    let desplazamiento = document.getElementById("desplazar").value;
    let mensaje = document.getElementById("mensaje_cifrar").value;

    const resultado = cifrar(mensaje, desplazamiento);
    document.getElementById("mensaje_cifrado").value = resultado;
}

export function descifrarMensaje() {
    let desplazamiento = document.getElementById("desplazar").value;
    let mensaje = document.getElementById("mensaje_cifrar").value;

    const resultado = descifrar(mensaje, desplazamiento);
    document.getElementById("mensaje_cifrado").value = resultado;
}



