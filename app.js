// Seleccionar todas las fotos
let fotos = document.querySelectorAll('.foto');

// Iterar sobre todas las fotos
fotos.forEach(function(foto) {
  // Agregar el listener para cada foto
  foto.addEventListener('dblclick', function() {
    // Buscar el corazón dentro del contenedor actual
    let heart = this.nextElementSibling;

    // Mostrar el corazón cambiando el display
    heart.style.display = 'block';

    // Ocultar el corazón después de 1 segundo
    setTimeout(function() {
      heart.style.display = 'none';
    }, 1000);
  });
});