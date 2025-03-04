document.getElementById('searchInput').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recargar la página)

    // Obtener el término de búsqueda ingresado por el usuario
    const query = document.getElementById('searchQuery').value;

    // Si el término de búsqueda está vacío, no hacer nada
    if (query.trim() === '') {
        return;
    }

    // Llamar a la API de Open Library
    fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`)
        .then(response => response.json())
        .then(data => {
            mostrarLibros(data.docs);
        })
        .catch(error => {
            console.error('Error al buscar libros:', error);
        });
});

// Función para mostrar los libros en la tabla
function mostrarLibros(libros) {
    const tablaLibros = document.getElementById('librosTabla');

    // Limpiar la tabla antes de agregar los nuevos libros
    tablaLibros.innerHTML = '';

    // Si no se encuentran libros
    if (libros.length === 0) {
        tablaLibros.innerHTML = '<tr><td colspan="4" class="text-center">No se encontraron libros.</td></tr>';
        return;
    }

    // Agregar los libros a la tabla
    libros.forEach(libro => {
        const fila = document.createElement('tr');

        // Crear las celdas de la fila
        const celdaPortada = document.createElement('td');
        const imagenPortada = libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : 'https://via.placeholder.com/100x150';
        celdaPortada.innerHTML = `<img src="${imagenPortada}" alt="Portada" class="img-fluid" style="width: 100px;">`;

        const celdaTitulo = document.createElement('td');
        celdaTitulo.textContent = libro.title;

        const celdaAutor = document.createElement('td');
        celdaAutor.textContent = libro.author_name ? libro.author_name.join(', ') : 'Desconocido';

        const celdaMasInfo = document.createElement('td');
        celdaMasInfo.innerHTML = `<a href="https://openlibrary.org${libro.key}" class="btn btn-info" target="_blank">Ver más</a>`; // Enlace a la página del libro en Open Library

        // Agregar las celdas a la fila
        fila.appendChild(celdaPortada);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaMasInfo);

        // Agregar la fila a la tabla
        tablaLibros.appendChild(fila);
    });
}
