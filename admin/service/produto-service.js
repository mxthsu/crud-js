const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then( resposta => {
        if (resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possivel listar os produtos')
    })
}

const criaProdutos = (nome, categoria, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            categoria: categoria,
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error('Não foi possivel criar um produto')
    })
}

const deletaProdutos = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possivel remover um produto')
        }
    })
}

const detalhaProdutos = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then( resposta => {
        if (resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar o produto')
    })
}

const editaProdutos = (id, nome, categoria, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
            nome: nome,
            categoria: categoria,
            preco: preco,
            descricao: descricao
        })
    })
    .then (resposta => {
        if (resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possivel editar o produto')
    })
}

export const produtoService = {
    listaProdutos,
    criaProdutos,
    deletaProdutos,
    detalhaProdutos,
    editaProdutos
}