// Función para obtener los libros de Google Books API
function fetchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    // Realizar la solicitud fetch a la API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.items); // Llamamos a la función que muestra los libros
        })
        .catch(error => {
            console.error('Error al obtener los libros:', error);
        });
}

// Función para mostrar los libros en el DOM
function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpiar cualquier contenido previo

    if (!books || books.length === 0) {
        bookList.innerHTML = '<p>No se encontraron libros para esta búsqueda.</p>';
        return;
    }

    // Recorrer los libros y crear elementos HTML para mostrarlos
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = book.volumeInfo.title;
        const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconocido';
        const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

        bookDiv.innerHTML = `
            <h2>${title}</h2>
            <p>Autor: ${author}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}" />` : ''}
        `;

        bookList.appendChild(bookDiv);
    });
}

// Función para manejar el evento de búsqueda
function handleSearch(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    const query = document.getElementById('searchInput').value;
    if (query) {
        fetchBooks(query); // Buscar libros con el término ingresado
    } else {
        alert("Por favor ingresa un término de búsqueda.");
    }
}

// Añadir un listener al formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', handleSearch);

// Búsqueda por defecto al cargar la página
fetchBooks('fantasía');
