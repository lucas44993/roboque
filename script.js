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

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    let current = 0;
    let interval = null;

    // Criar indicadores
    items.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-indicator');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showItem(i);
            resetAutoplay();
        });
        indicatorsContainer.appendChild(dot);
    });
    const indicators = document.querySelectorAll('.carousel-indicator');

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
            indicators[i].classList.toggle('active', i === index);
        });
        current = index;
    }

    prevBtn.addEventListener('click', function () {
        current = (current - 1 + items.length) % items.length;
        showItem(current);
        resetAutoplay();
    });

    nextBtn.addEventListener('click', function () {
        current = (current + 1) % items.length;
        showItem(current);
        resetAutoplay();
    });

    function autoplay() {
        interval = setInterval(() => {
            current = (current + 1) % items.length;
            showItem(current);
        }, 3500); // 3.5 segundos
    }

    function resetAutoplay() {
        clearInterval(interval);
        autoplay();
    }

    showItem(current);
    autoplay();
});
