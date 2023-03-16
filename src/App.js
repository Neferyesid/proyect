import './App.css';
import Lista from './componetes/Listaanimales/Lista';

const datosAnimal =[
  {
    nombre:'lulu',
    especie:'perro',
    genero:'F',
    edad:12
  },
  {
    nombre:'michi',
    especie:'gato',
    genero:'M',
    edad:2
  },
  {
    nombre:'coco',
    especie:'ave',
    genero:'M',
    edad:4
  },
  {
    nombre:'luna',
    especie:'perro',
    genero:'F',
    edad:6
  }

]


function App() {
  return (
    <div className="App">
      <Lista lista={datosAnimal}/>

    </div>
  );
}

export default App;
