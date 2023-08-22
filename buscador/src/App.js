import {useState} from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from './api';

function App() {

  const[input, setInput] = useState() 

  function aoClicar() {
    console.log(input);
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className="main">
        <h2>CEP: 19970054</h2>
        <span>Cidade: Palmital</span>
        <span>Estado: SP</span>
        <span>Rua: Avenida Anchieta 114</span>
        <span>Bairro: Centro</span>
      </main>

    </div>
  );
}

export default App;

