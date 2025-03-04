
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const enviarBtn = document.getElementById('enviarBtn');
    const toastBorrar = new bootstrap.Toast(document.getElementById('eraseToast'));
    const toastSuccess = new bootstrap.Toast(document.getElementById('successToast'));

    // Función para validar el nombre
    function validarTexto(id) {
        const input = document.getElementById(id);
        const regex = /^[a-zA-Z\s]+$/; 
        const errorElement = document.getElementById(id + '-error');
        if (!regex.test(input.value.trim())) {
            errorElement.style.display = 'block';
            input.classList.add('is-invalid');
            return false;
        } else {
            errorElement.style.display = 'none';
            input.classList.remove('is-invalid');
            return true;
        }
    }

    // Función para validar el correo
    function validarCorreo() {
        const correo = document.getElementById('correo');
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const errorElement = document.getElementById('correo-error');
        if (!regex.test(correo.value.trim())) {
            errorElement.style.display = 'block';
            correo.classList.add('is-invalid');
            return false;
        } else {
            errorElement.style.display = 'none';
            correo.classList.remove('is-invalid');
            return true;
        }
    }

    // Función para validar si el checkbox está marcado
    function validarCheckbox() {
        const checkbox = document.getElementById('terminos');
        const errorElement = document.getElementById('checkbox-error');
        if (!checkbox.checked) {
            errorElement.style.display = 'block';
            return false;
        } else {
            errorElement.style.display = 'none';
            return true;
        }
    }

    // Función para validar la edad
    function validarEdad() {
        const edad = document.getElementById('edad');
        const errorElement = document.getElementById('edad-error');
        if (edad.value <= 0 || edad.value >= 100) {
            errorElement.style.display = 'block';
            edad.classList.add('is-invalid');
            return false;
        } else {
            errorElement.style.display = 'none';
            edad.classList.remove('is-invalid');
            return true;
        }
    }

    // Lógica para el botón de limpiar
    limpiarBtn.addEventListener('click', function () {
        toastBorrar.show();
        form.reset();
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
            document.querySelector(`#${input.id}-error`).style.display = 'none';
        });
    });

    // Lógica para el botón de enviar
    enviarBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Limpiar los mensajes de error previos
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => input.classList.remove('is-invalid'));

        // Validaciones personalizadas
        const isNombreValido = validarTexto('nombre');
        const isCorreoValido = validarCorreo();
        const isMensajeValido = validarTexto('mensaje');
        const isEdadValida = validarEdad();
        const isCheckboxValido = validarCheckbox();

        // Si todas las validaciones son correctas, mostrar el toast de éxito
        if (isNombreValido && isCorreoValido && isMensajeValido && isEdadValida && isCheckboxValido) {
            toastSuccess.show();  
            form.reset();
            setTimeout(function () {
                toastSuccess.hide();
            }, 4000);
        }
    });
});