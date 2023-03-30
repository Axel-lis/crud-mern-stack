const express = require('express');
const app = express();


//importar conexion mongoDB
const archivoBD = require('./conexion');

//Importacion del archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario');

//importar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario', rutausuario)

app.get('/',(req, res)=>{
  res.end("Bienvenidos al servidor Backend-Node.js. Corriendo...")
});

//configurar server basico...
app.listen(5000, () =>{
    console.log("El servidor Node esta corriendo correctamente...");
});