document.addEventListener('DOMContentLoaded', function () {

    // Cambio de modo claro/oscuro con almacenamiento local
    const toggleBtn = document.getElementById('bot_oscuro_claro');
    if (localStorage.getItem('modo') === 'oscuro') {
        document.body.classList.add('modo-oscuro');
    }

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('modo-oscuro');
        if (document.body.classList.contains('modo-oscuro')) {
            localStorage.setItem('modo', 'oscuro');
        } else {
            localStorage.setItem('modo', 'claro');
        }
    });
});