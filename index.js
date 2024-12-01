import promptSync from "prompt-sync";
import { buscaFilme } from "./buscaFilme.js";
import { criarESalvarArquivo } from "./gerarArquivo.js";

const prompt = promptSync();

const filme = prompt("Digite o filme: ");

const resultado = await buscaFilme(filme);

criarESalvarArquivo(filme, resultado);
