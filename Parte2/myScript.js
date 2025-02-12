
document.addEventListener('DOMContentLoaded', function () {
    // Lógica para el carrusel y la visualización en el modal
    const carouselImages = document.querySelectorAll('#carouselExampleIndicators .carousel-item img');
    const modalImage = document.getElementById('modalImage');
    let currentIndex = 0;

    carouselImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;  // Establece la imagen en el modal
            currentIndex = index;  // Establece el índice de la imagen seleccionada
        });
    });

    document.getElementById('nextImage').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselImages.length;  // Ciclado al inicio
        modalImage.src = carouselImages[currentIndex].src;
    });

    document.getElementById('prevImage').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;  // Ciclado al final
        modalImage.src = carouselImages[currentIndex].src;
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const enviarBtn = document.getElementById('enviarBtn');
    const toastBorrar = new bootstrap.Toast(document.getElementById('eraseToast'));
    const toastSuccess = new bootstrap.Toast(document.getElementById('successToast'));

    // Validación de formulario
    function validarTexto(id) {
        const input = document.getElementById(id);
        const regex = /^[a-zA-Z\s]+$/;
        const errorElement = document.getElementById(id + '-error');

        if (!regex.test(input.value)) {
            errorElement.style.display = 'block';
            input.classList.add('is-invalid');
            return false;
        } else {
            errorElement.style.display = 'none';
            input.classList.remove('is-invalid');
            return true;
        }
    }

    function validarCheckbox() {
        const checkbox = document.getElementById('acepto');
        if (!checkbox.checked) {
            alert('Debes aceptar los términos y condiciones.');
            return false;
        }
        return true;
    }

    function validarTelefono() {
        const telefono = document.getElementById('telefono');
        const regex = /^[0-9]{9}$/; // Solo 9 dígitos
        const errorElement = document.getElementById('telefono-error');
        if (!regex.test(telefono.value)) {
            errorElement.style.display = 'block';
            telefono.classList.add('is-invalid');
            return false;
        } else {
            errorElement.style.display = 'none';
            telefono.classList.remove('is-invalid');
            return true;
        }
    }

    function validarEdad() {
        const edad = document.getElementById('edad');
        if (edad.value < 18 || edad.value > 99) {
            document.getElementById('edad-error').style.display = 'block';
            edad.classList.add('is-invalid');
            return false;
        } else {
            document.getElementById('edad-error').style.display = 'none';
            edad.classList.remove('is-invalid');
            return true;
        }
    }

    function validarFecha() {
        const fecha = document.getElementById('fecha');
        const fechaValor = new Date(fecha.value);
        const anio = fechaValor.getFullYear();
        if (anio < 1900 || anio > 2024) {
            document.getElementById('fecha-error').style.display = 'block';
            return false;
        } else {
            document.getElementById('fecha-error').style.display = 'none';
            return true;
        }
    }

    limpiarBtn.addEventListener('click', function () {
        toastBorrar.show();
        form.reset();
    });

    // Validación del formulario al enviarlo
    enviarBtn.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevenir el envío del formulario

        // Limpiar los mensajes de error previos
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => input.classList.remove('is-invalid'));

        // Validaciones personalizadas
        const isNombreValido = validarTexto('nombre');
        const isMensajeValido = validarTexto('mensaje');
        const isFechaValida = validarFecha();
        const isTelefonoValido = validarTelefono();
        const isEdadValida = validarEdad();
        const isCheckboxValido = validarCheckbox();

        // Si todas las validaciones son correctas, mostrar el toast de éxito
        if (isNombreValido && isMensajeValido && isFechaValida && isTelefonoValido && isEdadValida && isCheckboxValido) {
            toastSuccess.show();  // Mostrar el Toast de éxito
            form.reset();  // Limpiar el formulario

            // Ocultar el toast después de 4 segundos
            setTimeout(function () {
                toastSuccess.hide();
            }, 4000);
        }
    });
});
