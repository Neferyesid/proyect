import React from 'react'
import Lista from './Lista'

export default function Animal(props) {
  return (
    <div>Animal

      <p>{props.nombre}</p>
      <p>{props.especie}</p>
      <p>{props.genero}</p>
      <p>{props.edad}</p>
      <hr/>
 
    </div>
  )
}
