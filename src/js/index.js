// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        // PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();
        // PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir  
        const idPokeddevSelecionado = mostrarCartaoPokededvSelecionado(pokedev);
        // PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokededvNaListagem();
        //  PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativarPokedevSelecionadoNaListagem(idPokeddevSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idPokeddevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokeddevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokededvNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokededvSelecionado(pokedev) {
    const idPokeddevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokeddevSelecionado;
    const cartaoPokeddevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokeddevParaAbrir.classList.add("aberto");
    return idPokeddevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
