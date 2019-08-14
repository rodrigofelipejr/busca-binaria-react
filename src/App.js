import React, { useState } from 'react';
import ReactDom from 'react-dom'

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
        <a href='#' className='btn btn-default' role='button' onClick={iniciarJogo}>
          <span>Começar a jogar!</span>
          <i className="fas angle-double-down"></i>
        </a>
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
        <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
        <div className='box'>
          <a href='#' className='btn btn-default' role='button' onClick={iniciarJogo}>
            <span>Iniciar novamente?</span>
            <i className='angle-double-down'></i>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="App wrapper">
      <p>O seu número é {palpite}?</p>
      <div className='box'>
        <button onClick={menor} className='btn btn-default'>Menor</button>
        <button onClick={acertou} className='btn btn-default'>Acertou</button>
        <button onClick={maior} className='btn btn-default'>Maior</button>
      </div>
    </div>
  );
}

export default App;
