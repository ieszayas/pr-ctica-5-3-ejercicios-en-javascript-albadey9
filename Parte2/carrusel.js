// Se asegura de que el código se ejecute una vez que el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Lógica para el carrusel y la visualización de la imagen seleccionada en un modal
    const carouselImages = document.querySelectorAll('#carouselExampleIndicators .carousel-item img'); // Selecciona todas las imágenes del carrusel
    const modalImage = document.getElementById('modalImage'); // Selecciona la imagen del modal donde se mostrará la imagen seleccionada
    let currentIndex = 0; // Índice de la imagen actualmente visible

    // Añadir un evento de click en cada imagen del carrusel
    carouselImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;  // Establece la imagen en el modal cuando se hace clic
            currentIndex = index;  // Actualiza el índice de la imagen seleccionada
        });
    });

    // Funcionalidad para pasar a la siguiente imagen en el modal (ciclado)
    document.getElementById('nextImage').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselImages.length;  // Aumenta el índice y asegura que se cicla al principio si llega al final
        modalImage.src = carouselImages[currentIndex].src;  // Cambia la imagen en el modal
    });

    // Funcionalidad para regresar a la imagen anterior en el modal (ciclado)
    document.getElementById('prevImage').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;  // Decrementa el índice y cicla al final si llega al principio
        modalImage.src = carouselImages[currentIndex].src;  // Cambia la imagen en el modal
    });
});