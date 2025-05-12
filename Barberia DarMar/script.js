// Validación para evitar sábados y domingos
document.getElementById('fecha').addEventListener('input', function() {
    const date = new Date(this.value);
    const day = date.getUTCDay();
    if (day === 0 || day === 6) {
        alert("Por favor selecciona un día entre lunes y viernes.");
        this.value = '';
    }
});

// Validación de horario usando jQuery
$(document).ready(function() {
    $('#hora').on('input', function() {
        const hora = $(this).val();
        if (hora >= "09:00" && hora <= "22:00") {
            $(this).css('background-color', '#d4f9d4');
        } else {
            $(this).css('background-color', '#f9d4d4');
        }
    });
});
