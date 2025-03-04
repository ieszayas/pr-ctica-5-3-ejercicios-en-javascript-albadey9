// URL de la API de Open Library para obtener libros
const apiUrl = 'https://openlibrary.org/subjects/history.json?limit=20'; // Cambia el "history" por el tema que prefieras

// Función para cargar los libros
async function cargarLibros() {
    try {
        const respuesta = await fetch(apiUrl);
        const datos = await respuesta.json();

        // Obtener el contenedor donde se agregarán los libros
        const tablaLibros = document.getElementById('librosTabla');
        
        // Limpiar la tabla antes de agregar nuevos libros
        tablaLibros.innerHTML = '';

        // Recorrer los libros y agregarlos a la tabla
        datos.works.forEach(libro => {
            const fila = document.createElement('tr');

            // Crear las celdas de la fila
            const celdaPortada = document.createElement('td');
            const imagenPortada = libro.cover_id ? `https://covers.openlibrary.org/b/id/${libro.cover_id}-M.jpg` : 'https://via.placeholder.com/100x150';
            celdaPortada.innerHTML = `<img src="${imagenPortada}" alt="Portada" class="img-fluid" style="width: 100px;">`;

            const celdaTitulo = document.createElement('td');
            celdaTitulo.textContent = libro.title;

            const celdaAutor = document.createElement('td');
            celdaAutor.textContent = libro.authors ? libro.authors[0].name : 'Desconocido';

            const celdaMasInfo = document.createElement('td');
            
            // Crear el enlace para más información
            const link = document.createElement('a');
            link.href = `https://openlibrary.org${libro.key}`;
            link.target = '_blank'; // Abrir en una nueva pestaña
            link.classList.add('btn', 'btn-info');
            link.textContent = 'Ver más';

            celdaMasInfo.appendChild(link); // Agregar el enlace a la celda

            // Agregar las celdas a la fila
            fila.appendChild(celdaPortada);
            fila.appendChild(celdaTitulo);
            fila.appendChild(celdaAutor);
            fila.appendChild(celdaMasInfo);

            // Agregar la fila a la tabla
            tablaLibros.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
}

// Llamar a la función para cargar los libros al cargar la página
document.addEventListener('DOMContentLoaded', cargarLibros);
