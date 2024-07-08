document.addEventListener("DOMContentLoaded", function () {
  // Obtener el textarea y los botones por su ID
  let textAreaElement = document.getElementById("textEncriptar");
  let encryptButton = document.getElementById("encryptButton");
  let decryptButton = document.getElementById("decryptButton");
  const shift = 3; // Definir el desplazamiento para el cifrado César

  // Función para cifrar el texto usando el cifrado César
  function encryptCaesar(text, shift) {
    return text
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        // Si es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        // Si es una letra minúscula
        if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        // Si no es una letra, devolver el carácter sin cambios
        return char;
      })
      .join("");
  }

  // Función para descifrar el texto usando el cifrado César
  function decryptCaesar(encryptedText, shift) {
    return encryptedText
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        // Si es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        }
        // Si es una letra minúscula
        if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        }
        // Si no es una letra, devolver el carácter sin cambios
        return char;
      })
      .join("");
  }

  // Añadir evento click al botón de encriptar
  encryptButton.addEventListener("click", function () {
    let encriptarTexto = textAreaElement.value;
    if (encriptarTexto) {
      let encryptedText = encryptCaesar(encriptarTexto, shift);
      textAreaElement.value = encryptedText;
      console.log("Encrypted Text:", encryptedText);
    } else {
      console.error("No hay texto para encriptar");
    }
  });

  // Añadir evento click al botón de desencriptar
  decryptButton.addEventListener("click", function () {
    let encriptarTexto = textAreaElement.value;
    if (encriptarTexto) {
      let decryptedText = decryptCaesar(encriptarTexto, shift);
      textAreaElement.value = decryptedText;
      console.log("Decrypted Text:", decryptedText);
    } else {
      console.error("No hay texto para desencriptar");
    }
  });
});
