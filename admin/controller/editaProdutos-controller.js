import { produtoService } from "../service/produto-service.js"

( async () => {
    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputCategoria = document.querySelector('[data-categoria]')
    const inputPreco = document.querySelector('[data-preco]')
    const inputDescricao = document.querySelector('[data-descricao]')
    
    const dados = await produtoService.detalhaProdutos(id)
        inputNome.value = dados.nome
        inputCategoria.value = dados.categoria
        inputPreco.value = dados.preco
        inputDescricao.value = dados.descricao
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
    
        await produtoService.editaProdutos(id, inputNome.value, inputCategoria.value,  inputPreco.value, inputDescricao.value)
        window.location.href = "../telas/edicao_concluida.html"
    })
})()
