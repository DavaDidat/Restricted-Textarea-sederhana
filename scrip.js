const textarea = document.getElementById("message"); // ambil textarea
const charCount = document.getElementById("charCount"); // ambil span counter
const maxLength = textarea.getAttribute("maxlength"); // ambil batas max karakter

// jalan setiap user ngetik / hapus / paste
textarea.addEventListener("input", () => {
  // hitung jumlah karakter
  const currentLength = textarea.value.length;
  // tampilkan ke layar
  charCount.textContent = currentLength;

  if (currentLength >= maxLength) {
    charCount.style.color = "red";
    ((message.style.borderColor = "red"),
      (message.style.boxShadow = "0 0 5px red"));
  } else {
    charCount.style.color = "#555";
  }
});
