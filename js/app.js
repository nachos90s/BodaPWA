// Archivo principal de JavaScript para la PWA de boda

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencia al botón RSVP
    const rsvpButton = document.getElementById('rsvp-btn');
    
    // Agregar manejador de eventos para el botón RSVP
    if (rsvpButton) {
        rsvpButton.addEventListener('click', function() {
            alert('La función de confirmación de asistencia estará disponible próximamente.');
            // Aquí implementaremos la funcionalidad real más adelante
        });
    }
    
    // Función para obtener la fecha de la boda y calcular cuenta regresiva
    function actualizarCuentaRegresiva() {
        // Cambia esta fecha a la de tu boda
        const fechaBoda = new Date('April 15, 2024 12:00:00').getTime();
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;
        
        // Cálculos para días, horas, minutos y segundos
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        
        // Por ahora, simplemente mostramos un mensaje en la consola
        console.log(`Faltan ${dias} días para la boda`);
        
        // Más adelante, añadiremos un elemento visual para la cuenta regresiva
    }
    
    // Llamar a la función inicialmente
    actualizarCuentaRegresiva();
    
    // Actualizar cada día
    setInterval(actualizarCuentaRegresiva, 86400000); // 86400000 ms = 1 día
});

// Aquí añadiremos más funcionalidad en el futuro