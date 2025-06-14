let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const intervalTime = 3000; // Tempo em milissegundos (3 segundos)

// Mostrar a imagem atual
function showImage(index) {
    carouselItems.forEach((item) => {
        item.style.display = 'none'; // Esconder todas as imagens
    });
    carouselItems[index].style.display = 'block'; // Mostrar a imagem atual
}

// Mudar a imagem automaticamente
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems; // Incrementar o índice e circular
    showImage(currentIndex);
}, intervalTime);

// Exibir a primeira imagem
showImage(currentIndex);
