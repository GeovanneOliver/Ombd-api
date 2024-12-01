import fs from "fs";

function criarESalvarArquivo(nomeFilme, json) {
    const arquivoNovo = `./resultados/${nomeFilme}.json`

    const conversao = JSON.stringify(json);
    console.log(conversao);
    fs.promises.writeFile(arquivoNovo, conversao)
    .then(() => {
        console.log("Arquivo criado");
    }).catch((erro) =>{
        throw erro;
    }).finally(() => console.log("Operação finalizada"))
}

export { criarESalvarArquivo }