import fetch from "node-fetch";
import 'dotenv/config';

async function buscaFilme(filme) {
    try {
      const apiKey = (process.env.API_KEY);
      const response = await fetch(`https://www.omdbapi.com/?t=${filme}&apikey=${apiKey}`)
      const json = await response.json()
      
      return json
    } catch (error) {
      console.log(error.response.body);
    }
};

export { buscaFilme }