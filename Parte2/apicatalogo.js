// Cuando la página se haya cargado completamente, ejecutar la función
window.onload = function() {
    // Llamar a la API de Open Library (puedes cambiar esto por la API que prefieras)
    fetch('https://openlibrary.org/subjects/fiction.json?limit=40') // Aquí se pueden cambiar los parámetros para cargar otros tipos de libros
        .then(response => response.json())
        .then(data => {
            mostrarLibros(data.works);
        })
        .catch(error => {
            console.error('Error al cargar los libros:', error);
        });
};

// Función para mostrar los libros en formato de "tarjetas"
function mostrarLibros(libros) {
    const librosContainer = document.getElementById('librosContainer');

    // Limpiar el contenedor antes de agregar los nuevos libros
    librosContainer.innerHTML = '';

    // Si no se encuentran libros
    if (libros.length === 0) {
        librosContainer.innerHTML = '<p class="text-center">No se encontraron libros.</p>';
        return;
    }

    // Agregar los libros como "tarjetas"
    libros.forEach(libro => {
        const col = document.createElement('div');
        col.classList.add('col-md-3', 'mb-4'); // Usamos 'col-md-3' para tener 4 columnas por fila

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        // Revisamos si el libro tiene una portada
        const imagenPortada = libro.cover_id ? `https://covers.openlibrary.org/b/id/${libro.cover_id}-M.jpg` : 'https://via.placeholder.com/150x200';
        
        // Crear la imagen de portada
        const img = document.createElement('img');
        img.src = imagenPortada;
        img.alt = libro.title;
        img.classList.add('card-img-top');
        img.style = 'height: 300px; object-fit: cover;';

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Crear el título de la tarjeta
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = libro.title;

        // Crear el enlace para más información
        const link = document.createElement('a');
        link.href = `https://openlibrary.org${libro.key}`;
        link.target = '_blank';
        link.classList.add('btn', 'btn-info');
        link.textContent = 'Ver más';

        // Agregar todo a la tarjeta
        cardBody.appendChild(title);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);

        // Agregar la tarjeta al contenedor de libros
        col.appendChild(card);
        librosContainer.appendChild(col);
    });
}
