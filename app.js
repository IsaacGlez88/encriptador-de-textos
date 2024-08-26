function encriptacion() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");  // Corrección aquí
    let parrafo = document.getElementById("parrafo");  // Corrección aquí
    let personas = document.getElementById("personas");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito.";
        parrafo.textContent = "";
        personas.src = "./img/encriptado.jpg";
    } else {
        personas.src = "./img/persona.png";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        alert("Debes ingresar algún texto");
    }
}

function desenciptacion() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito.";
        parrafo.textContent = "";
        personas.src = "./img/desencriptado.jpg"; 
    } else {
        personas.src = "./img/persona.png";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        alert("Debes ingresar algún texto");
    }
}
