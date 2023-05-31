document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    
    if (name.value === '' || email.value === '' || message.value === '') {
        Swal.fire(
            'Error',
            'Todos los campos deben estar llenos.',
            'error'
        );
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailFormat.test(email.value)) {
        Swal.fire(
            'Error',
            'El formato del correo electrónico no es válido.',
            'error'
        );
        return false;
    }

    var nameFormat = /^[a-zA-Z ]+$/;
    if (!nameFormat.test(name.value)) {
        Swal.fire(
            'Error',
            'El nombre solo puede contener letras y espacios.',
            'error'
        );
        return false;
    }
    
    if (message.value.length < 1 || message.value.length > 500) {
        Swal.fire(
            'Error',
            'El mensaje debe tener entre 10 y 500 caracteres.',
            'error'
        );
        return false;
    }
    
    Swal.fire(
        'Enviado',
        'El formulario se ha enviado con éxito.',
        'success'
    );
    this.submit();
});
