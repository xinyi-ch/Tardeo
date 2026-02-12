const connection = require('../node_mysql/app');
//C:\xampp\htdocs\tardeo\node_mysql\app.js
//C:\Users\kattorres\tardeo_proyecto_node\models\database_tardeo.js
//./models/database
//C:\Users\kattorres\OneDrive - IFP Formación Profesional\Escritorio\node_mysql\app.js
//./models/database_tardeo.js


let form = document.getElementById("formularioCrearEvento");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Aqui va el codigo para recoger los datos del formulario
    let NombreEvento = document.querySelector('input[name="NombreEvento"]').value;
    let DescripcionEvento = document.querySelector('input[name="DescripcionEvento"]').value;
    let UbicacionEvento = document.querySelector('input[name="UbicacionEvento"]').value;
    let FechaEvento = document.querySelector('input[name="FechaEvento"]').value;
    let HoraEvento = document.querySelector('input[name="HoraEvento"]').value;
    let CategoriaEvento = document.querySelector('input[name="CategoriaEvento"]').value;
});

const db = require('../node_mysql/app');
db.insertarDatos(NombreEvento, DescripcionEvento, UbicacionEvento, FechaEvento, HoraEvento, CategoriaEvento);
