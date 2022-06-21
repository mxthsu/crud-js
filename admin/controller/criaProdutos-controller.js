import { produtoService } from "../service/produto-service.js"

const formulario = document.querySelector('[data-form]')

addEventListener('submit', async (evento)=> {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const categoria = evento.target.querySelector('[data-categoria]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value

    await produtoService.criaProdutos(nome, categoria, preco, descricao)
    window.location.href = '../telas/cadastro_concluido.html'
    
})