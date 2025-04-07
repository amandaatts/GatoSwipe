// Importa o axios pra fazer requisições HTTP
import axios from "axios";

// Cria uma instância personalizada do axios com a base da API dos gatinhos
const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export default api;
