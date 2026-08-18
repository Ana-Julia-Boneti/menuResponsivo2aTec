let tamanhoFonte = 16;

const corpo = document.body;

const aumentar = document.getElementById("aumentar");
const aumentar = document.getElementById("diminuir");

// Aumenta a fonte
aumentar.addEventListener("click", function() {
    tamanhoFonte += 2;
    corpo.style.fontSize = tamanhoFonte + "px";
});

// Diminui a fonte
diminuir.addEventListener("click", function() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        corpo.style.fontSize = tamanhoFonte + "px";
    }
});
