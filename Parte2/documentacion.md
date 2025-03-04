
---

## **Página Principal (`index.html`)**

La página principal es la entrada al sitio web. Incluye un menú de navegación, un formulario de contacto, un carrusel de imágenes, una tabla con los 10 libros más vendidos, y una sección de servicios.

### Características:
- **Menú de Navegación**: 
  - Acceso a diferentes categorías de libros.
  - Enlace al catálogo de libros.
  - Sección de servicios.
  - Barra de búsqueda para filtrar libros por nombre o autor.
  - Opción para cambiar entre **modo claro** y **modo oscuro**.
  
- **Formulario de Contacto**:
  - Permite al usuario enviar un mensaje de contacto a la tienda.
  - Validación de datos (nombre, teléfono, edad, etc.) para asegurarse de que se ingresen correctamente antes de enviarlo.
  
- **Tabla de Libros Más Vendidos**:
  - Muestra los 10 libros más vendidos con su portada, título y autor.
  - Estos libros pueden ser seleccionados para obtener más detalles sobre ellos.
  
- **Carrusel de Imágenes**:
  - Un conjunto de imágenes deslizables que pueden mostrar promociones o productos destacados de la tienda.

- **Servicios**:
  - Información sobre los servicios ofrecidos, como envío rápido, soporte 24/7, y selección especial de libros.

---

## **Páginas de Categorías (`ficcion.html`, `historia.html`, `fantasia.html`, `infantil.html`, `autoayuda.html`)**

Cada página está dedicada a una categoría de libros específica. Muestra una tabla con los libros relacionados a esa categoría.

### Características:
- **Categorías Específicas**:
  - Cada página carga libros relacionados a una categoría específica (Ficción, Historia, Fantasía, Infantil, y Autoayuda) utilizando APIs externas.
  
- **Interacción con API**:
  - Los libros se obtienen de manera dinámica a través de **JavaScript** que interactúa con diferentes APIs según la categoría seleccionada.
  - Cada libro tiene un enlace que redirige al usuario a una página web externa con más detalles sobre el libro.

- **Tabla de Libros**:
  - Los libros se presentan en una tabla que incluye la portada, título, autor y un enlace para más detalles.

---

## **Página de Catálogo (`catalogo.html`)**

La página del catálogo muestra todos los libros disponibles en el sitio, sin estar restringidos a una categoría específica.

- **Catálogo Completo**:
  - Los libros se obtienen dinámicamente mediante una **API** que devuelve una lista de libros.
  - Cada libro es un enlace que lleva al usuario a una página externa con más detalles sobre el libro.

---

## **Funcionalidades Específicas**

### 1. **Modo Oscuro**

Permite al usuario alternar entre el modo claro y el modo oscuro, lo que cambia la apariencia de la página.


## 2. Búsqueda de Libros

El usuario puede buscar libros por título o autor. Esta funcionalidad se integra con un formulario de búsqueda que permite al usuario filtrar los libros que se muestran en la página según la consulta ingresada.

**Características**:
- El formulario permite escribir un término de búsqueda.
- La búsqueda se realiza comparando el término ingresado con los títulos y autores de los libros disponibles.
- Los resultados de la búsqueda se muestran dinámicamente en una tabla, ocultando los libros que no coinciden con la búsqueda.

## 3. Formulario de Contacto con Validación

El formulario de contacto permite a los usuarios enviar consultas o mensajes a la plataforma. Antes de enviar el formulario, se valida que los datos ingresados sean correctos, incluyendo nombre, mensaje, teléfono y edad.

### Características:
- Los campos de nombre y mensaje no pueden estar vacíos.
- El número de teléfono debe ser un número de 9 dígitos.
- La edad debe estar entre 18 y 99 años.
- Los datos se validan utilizando JavaScript y se informa al usuario si algo está incorrecto antes de enviarlo.

---

## Interacción con APIs

Cada categoría de libros en el sitio se carga dinámicamente a través de **API externas**. Estas APIs proporcionan información detallada sobre los libros disponibles en cada categoría (por ejemplo, Ficción, Fantasía, Historia, etc.). El código JavaScript se encarga de hacer las peticiones a estas APIs y mostrar los resultados en las páginas correspondientes.

### Características:
- Se utilizan diferentes **APIs** para obtener los libros de distintas categorías.
- Los libros obtenidos se muestran en una tabla en la página correspondiente.
- Cada libro tiene un enlace para redirigir al usuario a una página web externa donde se puede ver más información sobre el libro.


