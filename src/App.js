import React, { useState } from 'react';
// import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp, faThumbsUp, faLaughWink } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  const [estado, setEstado] = useState('ENTRADA')
  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpites] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }

  if (estado === 'ENTRADA') {
    return (
      <div className='wrapper'>
        <button onClick={iniciarJogo} className='btn btn-default'>
          <span>Começar a jogar!</span>
        </button>
      </div>
    )
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)

    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)

    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }

  if (estado === 'FIM') {
    return (
      <div className='wrapper'>
        <p>Acertei o número {palpite} com {numPalpites} chutes! <FontAwesomeIcon icon={faLaughWink}></FontAwesomeIcon> </p>
        <div className='box'>
          <button onClick={iniciarJogo} className='btn btn-default'>
            <span>Iniciar novamente?</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="App wrapper">
      <p>O seu número é {palpite}?</p>
      <div className='box'>
        <button onClick={menor} className='btn btn-default'>
          <span>Menor</span>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </button>
        <button onClick={acertou} className='btn btn-default'>
          <span>Acertou</span>
          <FontAwesomeIcon icon={faThumbsUp} /></button>
        <button onClick={maior} className='btn btn-default'>
          <span>Maior</span>
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
      </div>
    </div>
  );
}

export default App;
