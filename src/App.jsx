import { useEffect, useState } from "react";
import GatoCard from "./components/GatoCard";
import api from "./services/api";
import "./styles/App.css";
import gatoFeliz from "./assets/gato.gif";

function App() {
  const [gato, setGato] = useState(null);
  const [deuMatch, setDeuMatch] = useState(false);
  const carregarGato = async () => {
    try {
      const res = await api.get("/images/search?has_breeds=1");
      setGato(res.data[0]);
      setDeuMatch(false);
    } catch (err) {
      console.error("Erro ao buscar gato:", err);
    }
  };

  const handleCurtir = (like) => {
    if (!like) {
      carregarGato();
      return;
    }

    const match = Math.random() < 0.3;
    if (match) {
      setDeuMatch(true);
      setTimeout(() => {
        carregarGato();
      }, 2000);
    } else {
      carregarGato();
    }
  };

  useEffect(() => {
    carregarGato();
  }, []);

  return (
    <div className="app-container">
      {deuMatch && (
        <div className="match-overlay">
          <img src={gatoFeliz} alt="Gato feliz" />
          <p>Deu Match!</p>
        </div>
      )}
      <h1>GatoSwipe</h1>
      {gato ? (
        <GatoCard gato={gato} onCurtir={handleCurtir} />
      ) : (
        <p>Carregando gato fofo...</p>
      )}
    </div>
  );
}

export default App;
