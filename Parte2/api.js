// Función para obtener los libros desde la API de Open Library
async function fetchBooks() {
    const url = 'https://openlibrary.org/subjects/programming.json?limit=30'; // API de Open Library
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Verifica si los datos son correctos
      console.log(data);
  
      // Mostrar libros en la galería y en la tabla
      displayBooksInGallery(data.works);
      displayBooksInTable(data.works);
    } catch (error) {
      console.error('Error al obtener los libros:', error);
    }
  }
  // Función para mostrar los libros en la galería (cards)
function displayBooksInGallery(books) {
    const productGallery = document.getElementById('productGallery');
    productGallery.innerHTML = ''; // Limpiar la galería antes de agregar nuevos productos
  
    books.forEach(book => {
      const { title, cover_id, author_name, first_publish_year } = book;
  
      const coverImage = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg` : 'https://via.placeholder.com/150';
      
      const card = document.createElement('div');
      card.classList.add('col-md-3', 'mb-4');
      card.innerHTML = `
        <div class="card">
          <img src="${coverImage}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Autor: ${author_name ? author_name.join(', ') : 'Desconocido'}</p>
            <p class="card-text">Publicado en: ${first_publish_year}</p>
            <a href="#" class="btn btn-primary">Leer más</a>
          </div>
        </div>
      `;
      
      productGallery.appendChild(card);
    });
  }

  // Función para mostrar los libros en la tabla
function displayBooksInTable(books) {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTableBody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos productos
  
    books.forEach(book => {
      const { title, author_name, first_publish_year } = book;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${title}</td>
        <td>${author_name ? author_name.join(', ') : 'Desconocido'}</td>
        <td>${first_publish_year || 'No disponible'}</td>
      `;
      
      productTableBody.appendChild(row);
    });
  }
  window.onload = function() {
    fetchBooks(); // Llama la función para obtener y mostrar los libros
  };
  
  
  