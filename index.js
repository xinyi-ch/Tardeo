const express = require('express');
const morgan = require('morgan');

//inicializacion
const app = express();

//configuraciones 
//El uso del puerto
app.set('port', process.env.PORT || 4000);

//Peticiones que se hacen al sistema:
//Middlewares
 app.use(morgan('dev'));

 //Variables globales 

 //Rutas 

//Servidor 
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
})