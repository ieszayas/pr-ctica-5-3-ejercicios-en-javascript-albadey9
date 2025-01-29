document.addEventListener('DOMContentLoaded', function () {
    
    // Lógica para "Leer más..."
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sinopsisContainer = this.previousElementSibling;
            const fullDesc = sinopsisContainer.querySelector('.full-description');

            if (fullDesc.style.display === 'none') {
                fullDesc.style.display = 'inline';  // Mostrar la descripción completa
                this.textContent = 'Leer menos...';  // Cambiar texto del botón
            } else {
                fullDesc.style.display = 'none';  // Ocultar la descripción completa
                this.textContent = 'Leer más...';  // Volver a texto inicial
            }
        });
    });
});