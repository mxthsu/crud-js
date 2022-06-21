import { produtoService } from "../service/produto-service.js"

const criaNovaLinha = (nome, categoria, preco, descricao, id) => {
    const linhaNovoProduto = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${nome}</td>
                    <td>${categoria}</td>
                    <td>R$ ${preco},00</td>
                    <td>${descricao}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_produto.html?id=${id}"  class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id

    return linhaNovoProduto
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar) {
        try {
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await produtoService.deletaProdutos(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    try {
        const listaClientes = await produtoService.listaProdutos()
   
        listaClientes.forEach(elemento => {
                tabela.appendChild(criaNovaLinha(elemento.nome, elemento.categoria, elemento.preco, elemento.descricao, elemento.id))
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}

render()