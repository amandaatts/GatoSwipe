import React from "react";
import "./GatoCard.css";

function GatoCard({ gato, onCurtir }) {
  const { id, url, breeds } = gato;
  const raca = breeds && breeds.length > 0 ? breeds[0] : null;

  return (
    <div className="card">
      <img className="imagem-gato" src={url} alt={`Gato fofo ${id}`} />
      {raca ? (
        <div className="info">
          <h2><strong>Raça:</strong> {raca.name}</h2>
          <p><strong>Origem:</strong> {raca.origin}</p>
          <p><strong>Temperamento:</strong> {raca.temperament}</p>
        </div>
      ) : (
        <div className="info">
          <p>Informações da raça não disponíveis 😿</p>
        </div>
      )}
      <div className="botoes">
        <button className="botao" onClick={() => onCurtir(false)}>❌</button>
        <button className="botao" onClick={() => onCurtir(true)}>💜</button>
      </div>
    </div>
  );
}

export default GatoCard;
