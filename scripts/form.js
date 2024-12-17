// Detectar la ubicación del usuario y preseleccionar el país
function detectarPais() {
  var paises = {
    "AR": "Argentina",
    "BO": "Bolivia",
    "BR": "Brasil",
    "CL": "Chile",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "EC": "Ecuador",
    "SV": "El Salvador",
    "GT": "Guatemala",
    "HN": "Honduras",
    "MX": "México",
    "NI": "Nicaragua",
    "PA": "Panamá",
    "PY": "Paraguay",
    "PE": "Perú",
    "DO": "República Dominicana",
    "UY": "Uruguay",
    "VE": "Venezuela",
    "US": "Estados Unidos",
    "ES": "España"
  };

  var request = new XMLHttpRequest();
  request.open("GET", "https://ipapi.co/json/", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var paisCodigo = data.country_code;

      if (paises[paisCodigo]) {
        var selectPais = document.getElementById("pais");

        // Seleccionar automáticamente el país en el <select>
        selectPais.value = paises[paisCodigo];

        // Actualizar el código del país
        actualizarCodigoPais(paises[paisCodigo]);
      }
    } else {
      alert("Error al detectar el país: Respuesta no válida.");
    }
  };

  request.onerror = function () {
    alert("Error al conectar con el servidor para detectar el país.");
  };

  request.send();
}

// Actualizar el código de país automáticamente al cambiar el país
function actualizarCodigoPais(pais) {
  var codigos = {
    "Argentina": "+54",
    "Bolivia": "+591",
    "Brasil": "+55",
    "Chile": "+56",
    "Colombia": "+57",
    "Costa Rica": "+506",
    "Cuba": "+53",
    "Ecuador": "+593",
    "El Salvador": "+503",
    "Guatemala": "+502",
    "Honduras": "+504",
    "México": "+52",
    "Nicaragua": "+505",
    "Panamá": "+507",
    "Paraguay": "+595",
    "Perú": "+51",
    "República Dominicana": "+1",
    "Uruguay": "+598",
    "Venezuela": "+58",
    "Estados Unidos": "+1",
    "España": "+34"
  };

  var codigoInput = document.getElementById("codigoPais");
  if (codigos[pais]) {
    codigoInput.value = codigos[pais];
  }
}

// Detectar cambios en el <select> de país y actualizar el código de país
function configurarEventosFormulario() {
  var selectPais = document.getElementById("pais");
  selectPais.addEventListener("change", function (event) {
    var paisSeleccionado = event.target.value;
    actualizarCodigoPais(paisSeleccionado);
  });
}

// Inicializar
window.onload = function () {
  detectarPais();
  configurarEventosFormulario();
};