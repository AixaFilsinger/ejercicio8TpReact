import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Titulo from './Components/Titulo';
import { Container } from 'react-bootstrap';
import Formulario from './Components/Formulario';

function App() {
  

  return (
    <>
     <Container className='main my-5'>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </Container>
    <footer className='bg-secondary p-3 text-center fs-4 text-light'>
        ©Todos los derechos reservados™
      </footer>
  
    </>
   )
}

export default App
