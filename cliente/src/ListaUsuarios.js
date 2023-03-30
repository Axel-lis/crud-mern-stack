import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UsuarioIndividual from './Usuarioindividual';

function ListaUsuarios(){

 const[datausuarios, setdatausuario] = useState([]);
 useEffect(() =>{
    axios.get('api/usuario/obtenerusuario')
    .then(res =>{
        console.log(res.data);
        setdatausuario(res.data);
    })
    .catch(err =>{
        console.log(err);
    });
 }, []);
//Mapear lista de usuarios en objeto Usuario
//usamos .map() para mapear la listausuarios en un objeto tipo usuarios
const listausuarios = datausuarios.map(usuario =>{
     return(
        <div>
            {/* le mandamos como parametro el usuario que estamos mapeando como objeto */}
            <UsuarioIndividual usuario={usuario} />
        </div>
     )
})
    return(
        <div>
            <h2>Lista de usuarios</h2>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios;