//CONEXION A LA BASE DE DATOS
const mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'bdtardeo'
});

conexion.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('CONEXION EXITOSA! ' + conexion.threadId);
});

module.exports = conexion;
conexion.connect();
//conexion.end();

//FUNSION PARA INSERTAR DATOS A LA BD 
function insertarDatos(NombreEvento, DescripcionEvento, UbicacionEvento, FechaEvento, HoraEvento, CategoriaEvento) {
    connection.query(
        'INSERT INTO evento (NombreEvento, DescripcionEvento, UbicacionEvento, FechaEvento, HoraEvento, CategoriaEvento) VALUES (?, ?, ?, ?, ?, ?)',
        [NombreEvento, DescripcionEvento, UbicacionEvento, FechaEvento, HoraEvento, CategoriaEvento],
        function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log('Datos insertados correctamente');
            }
        }
    );
}

conexion.end();