import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }

  const soquinho = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Fala Galera!!!
        </div>

        <div className="bio">
        Sou o Douglas e produzo conteúdo para o canal web3dev! Conecte sua carteira  Ethereum wallet e me manda um tchauzinho ou um soquinho!
        </div>

        <button className="waveButton" onClick={wave}>
          Mandar Tchauzinho 👋
        </button>

        <button className="soquinhoButton" onClick={soquinho}>
          Mandar Soquinho 👊
        </button>
      </div>
    </div>
  );
}
