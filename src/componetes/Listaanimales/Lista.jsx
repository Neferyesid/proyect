import React from 'react'
import Animal from './animal'

export default function Lista(props) {
  console.log(props.lista)
  return (
    <div>
      <h1>mascotas</h1>
      <hr/>
    {props.lista.map((respuesta)=>{

      return(
          <Animal
            nombre ={respuesta.nombre}
            especie ={respuesta.especie}
            genero ={respuesta.genero}
            edad ={respuesta.edad}

          />
          
      );
    })}

      
      {
      /* <Animal nombre="lulu" especie="perro" genero="F" edad ={12}/> 
      <Animal nombre="michi" especie="gato" genero="M" edad ={13}/>
      <Animal nombre="coco" especie="loro" genero="M" edad ={8}/>
      <Animal nombre="Luna" especie="perro" genero="F" edad ={4}/> */}



    </div>
  )
}

