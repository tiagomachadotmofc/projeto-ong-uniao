// Obter o modal
var modal = document.getElementById("modal");

// Obter a imagem e o modal de imagem
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Obter todas as imagens da galeria
var images = document.querySelectorAll(".gallery-item img");

// Adicionar evento de clique a cada imagem
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fechar o modal
span.onclick = function() { 
    modal.style.display = "none";
}
