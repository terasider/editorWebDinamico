document.getElementById('input').addEventListener('input', atualiza);
document.getElementById('inputStyle').addEventListener('input', atualiza);

function atualiza() {
    let entrada = document.getElementById('input');
    let entradaEstilo = document.getElementById('inputStyle');
    let saida = document.getElementById('output');
    let saidaEstilo = document.getElementById('estilo');

    saida.innerHTML = entrada.value;
    saidaEstilo.innerHTML = entradaEstilo.value;

    processarScripts(saida);
}

function processarScripts(elemento) {
    // Remove scripts anteriores
    const scriptsAntigos = elemento.querySelectorAll('script');
    scriptsAntigos.forEach(script => script.remove());

    // Executa scripts novos
    const scriptsNovos = elemento.querySelectorAll('script');
    scriptsNovos.forEach(script => {
        const novoScript = document.createElement('script');
        if (script.src) {
            novoScript.src = script.src;
        } else {
            novoScript.textContent = script.textContent;
        }
        document.body.appendChild(novoScript);
        document.body.removeChild(novoScript); // Remove o script após execução para evitar duplicação
    });
}
