document.addEventListener("DOMContentLoaded", function () {
  const textAreaElement = document.getElementById("textEncriptar");
  const encryptButton = document.getElementById("encryptButton");
  const decryptButton = document.getElementById("decryptButton");
  const asideImage = document.getElementById("asideImage");
  const encryptedTextList = document.getElementById("encryptedTextList");
  const copyButton = document.getElementById("copyButton");
  const clearButton = document.getElementById("clearButton");

  function encrypt(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  function decrypt(encryptedText) {
    return encryptedText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  function showEncryptedText(text) {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    encryptedTextList.appendChild(listItem);
    asideImage.style.display = "none";
    copyButton.style.display = "block";
    clearButton.style.display = "block";
  }

  function clearEncryptedText() {
    encryptedTextList.innerHTML = "";
    asideImage.style.display = "block";
    copyButton.style.display = "none";
    clearButton.style.display = "none";
  }

  encryptButton.addEventListener("click", function () {
    const text = textAreaElement.value;
    if (text) {
      const encryptedText = encrypt(text);
      textAreaElement.value = encryptedText;
      showEncryptedText(encryptedText);
      console.log("Encrypted Text:", encryptedText);
    } else {
      console.error("No hay texto para encriptar");
    }
  });

  decryptButton.addEventListener("click", function () {
    const text = textAreaElement.value;
    if (text) {
      const decryptedText = decrypt(text);
      textAreaElement.value = decryptedText;
      console.log("Decrypted Text:", decryptedText);
    } else {
      console.error("No hay texto para desencriptar");
    }
  });

  copyButton.addEventListener("click", function () {
    const range = document.createRange();
    range.selectNode(encryptedTextList);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      console.log("Texto copiado al portapapeles");
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
    }
  });

  clearButton.addEventListener("click", function () {
    clearEncryptedText();
  });

  textAreaElement.addEventListener("input", function () {
    if (textAreaElement.value === "") {
      clearEncryptedText();
    }
  });
});
