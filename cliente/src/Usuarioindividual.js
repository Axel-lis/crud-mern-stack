import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';


//le pasamos como paramentro el objeto usuario mapeado en ListaUsuarios.js
function UsuarioIndividual({usuario}){

const navegar = useNavigate();

//para animacion  de scroll al bajar
useEffect(() => {
  AOS.init()
}, )

//funcion para borrar usuario
function borrarUsuario(idusuario){
  axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res =>{
    console.log(res.data);
    alert(res.data);
    navegar(0);
  }).catch(err=>{
    console.log(err)
  })
}

return(
    <div className="containter">
      <div className="row">
        <div className="col-sm-6 offset-3" data-AOS="flip-right">
            <ul className="list-group">
                    <li className="list-group-item">{usuario.idusuario}</li>
                    <li className="list-group-item">{usuario.nombre}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.telefono}</li>
            </ul>
                <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{borrarUsuario(usuario.idusuario)}}>Borrar</button>
                <hr className="mt-4"></hr>
        </div>     
      </div>
    </div>
    )
}

export default UsuarioIndividual;