function encriptacion() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo  = document.getElementById("parrafo");
    let personas = document.getElementById("personas");
    let textoCifrado = texto
                        .replace(e/gi, "enter")
                        .replace(i/gi, "imes")
                        .replace(a/gi, "ai")
                        .replace(o/gi, "ober")
                        .replace(u/gi, "ufat");
 if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto encriptado con exito.";
    parrafo.textContent = "";
    document.getElementById("parrafo").textContent = "";
    personas.src="./img/encriptado.jpg"
 
 } else {
    personas.src = "./img/persona.png";
    alert("Debes ingresar algun texto");
 }

}