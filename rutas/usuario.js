const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

module.exports= router;

/*escribimos la primera ruta de prueba...
router.get('/ejemplo',(req,res) =>{
    res.end('Saludo carga desde ruta ejemplo')
}) */

//AGREGAR USUARIO...
//router.post(ruta) <--solicitud HTTP que recoge los datos del formulario
router.post('/agregarusuario', (req, res) =>{
    const nuevousuario =  new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
//metodo .save de mongoose nos permite guardar en base de datos, no puede usarse callbacks, promesas
nuevousuario.save()
.then(result => {
    res.send('usuario agregado correctamente');
})
.catch(error => {
    res.send(error);
});
});
//OBTENER TODOS LOS USUARIOS...
router.get('/obtenerusuario', (req, res) => {
    ModeloUsuario.find({})
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  });
//OBTENER DATA DE USUARIO...
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario })
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  //ACTUALIZA USUARIO...
  router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono
    })
    .then(result => {
        res.send('Usuario actualizado correctamente');
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    });
});
  //BORRAR USUARIO...
  router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario})
    .then(result => {
        res.send('Usuario eliminado correctamente');
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    });
});
