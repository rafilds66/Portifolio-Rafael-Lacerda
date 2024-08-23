const botoesCarrossel = document.querySelectorAll(".botao")
const cards = document.querySelectorAll(".card")


botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener("click",() => {
        removerBotaoAtivo()
        adicionarBotaoAtivo(botao)
        removerCardAtivo()
        adicionarCardAtivo(indice)
    })
})

function adicionarCardAtivo(indice) {
    cards[indice].classList.add('card-ativo')
    console.log(cards[indice])
}

function removerCardAtivo() {
    const cardAtivo = document.querySelector(".card-ativo")
    cardAtivo.classList.remove("card-ativo")
}

function adicionarBotaoAtivo(botao) {
    botao.classList.add("ativo")
}

function removerBotaoAtivo() {
    const botaoAtivo = document.querySelector(".ativo")
    botaoAtivo.classList.remove("ativo")
}
