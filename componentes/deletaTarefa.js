const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
    
    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement /* elemento pai do botao é o li, que sera excluida*/
    
    tarefaCompleta.remove()
    
    return botaoDeleta
}

export default BotaoDeleta