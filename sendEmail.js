// Script separado para el envío del formulario usando EmailJS
document.addEventListener('DOMContentLoaded', function () {
  // Inicializa EmailJS con la Public Key
  emailjs.init("j9jXXxttsMXkUxElr"); // Reemplaza con tu Public Key

  // Obtén el formulario por su ID
  var form = document.getElementById('contactForm');

  // Evento para manejar el envío del formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura de campos del formulario
    var templateParams = {
      nombre: document.getElementById('nombre').value.trim(),
      apellido: document.getElementById('apellido').value.trim(),
      email: document.getElementById('email').value.trim(),
      pais: document.getElementById('pais').value,
      codigoPais: document.getElementById('codigoPais').value,
      whatsapp: document.getElementById('whatsapp').value.trim(),
      comentarios: document.getElementById('comentarios').value.trim()
    };

    // Verificar parámetros en la consola (opcional)
    console.log("Enviando los siguientes parámetros a EmailJS:", templateParams);

    // Envía el correo mediante EmailJS
    emailjs.send('service_d3d2d2r', 'template_iabde9b', templateParams)
      .then(function () {
        alert('✅ ¡Tu información se ha enviado correctamente!');
        form.reset(); // Limpia el formulario después del envío
      }, function () {
        alert('❌ Error al enviar el correo. Verifica tu conexión e inténtalo nuevamente.');
      });
  });
});
// JavaScript Document