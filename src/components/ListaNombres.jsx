import React, { useState } from "react";

function ListaNombres() {
    const [nombre, setNombre] = useState('');
    const [nombres, setNombres] = useState([]);

    const Guardar= () =>{
        setNombres([...nombres, nombre])
        setNombre('')
        console.log(nombres)
    }
    return (
        <div>
            <p>Ingresar nombre: </p>
            <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
            <button onClick={Guardar}>Enviar</button>
            <ul>
                {
                    nombres.map((elemento,index) => {
return  <li key={index}>{elemento}</li>
                    } )
                }
               
            </ul>
        </div>
    )
}

export default ListaNombres