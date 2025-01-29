
document.addEventListener('DOMContentLoaded', function () {
    function buscarLibro() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const tableRows = document.querySelectorAll("#tabla-libros tbody tr");
    
        tableRows.forEach(function (row) {
            const cells = row.getElementsByTagName("td");
            let match = false;
    
            // Iterar por cada celda en la fila y buscar el término
            for (let i = 0; i < cells.length; i++) {
                const cellText = cells[i].textContent.toLowerCase();
                if (cellText.includes(searchTerm)) {
                    match = true;  // Si encuentra una coincidencia, marca la fila
                    break;
                }
            }
    
            // Mostrar u ocultar la fila según si hay coincidencia
            row.style.display = match ? "" : "none";
        });
    }
    
    // Añadir evento de escucha para el input, para realizar búsqueda en tiempo real
    document.getElementById("searchInput").addEventListener('input', buscarLibro);
    
    // Evitar que el formulario recargue la página al hacer submit (si es necesario)
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar recarga al hacer submit
        buscarLibro(); // Llamar a la función de búsqueda
    });
    
});