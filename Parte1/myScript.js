document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const enviarBtn = document.getElementById('enviarBtn')
    const toastBorrar = new bootstrap.Toast(document.getElementById('eraseToast'));
    const toastSuccess = new bootstrap.Toast(document.getElementById('successToast'));



    // Función para validar texto (nombre y mensaje)
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

    // Verificar si al menos un checkbox está seleccionado
    function validarCheckbox() {
        const checkbox = document.getElementById('acepto');
        if (!checkbox.checked) {
            alert('Debes aceptar los términos y condiciones.');
            return false;
        }
        return true;
    }

    // Validación del teléfono (solo números y 9 dígitos)
    function validarTelefono() {
        const telefono = document.getElementById('telefono');
        const regex = /^[0-9]{9}$/;  // Solo 9 dígitos
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

    // Validación de la edad (entre 18 y 99)
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

    // Verificar que la fecha esté en un rango válido (entre 1900 y 2024)
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
        toastBorrar.show();  // Mostrar el Toast de limpieza
        form.reset();  // Esto limpia el formulario
    });

    // Validar formulario antes de enviar
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

        // Si todas las validaciones son correctas, enviar el formulario y mostrar el toast de éxito
        if (isNombreValido && isMensajeValido && isFechaValida && isTelefonoValido && isEdadValida && isCheckboxValido) {
            // Aquí enviarías el formulario (en un caso real, tal vez una llamada AJAX, o solo `form.submit()`)
            toastSuccess.show();  // Mostrar el Toast de éxito
            form.onsubmit();

            // Esperar 4 segundos antes de ocultar el toast
            setTimeout(function () {
                toastSuccess.hide();
            }, 4000);
        }
    });
});
