async function deleta_cliente() {
    const cpf_cnpj = document.querySelector("#cpf_cnpj").value    

    let query_content = document.querySelector("#query_content")
    query_content.innerHTML = 
    `<p>insira o CPF ou CPNJ do cliente que desela deletar</p>
    <input type="text" id="delete_query">
    <button onclick="deleta()">Deletar</button>    `
    
}


async function deleta() {    
    let delete_query = document.querySelector("#delete_query").value    
    let response = await fetch('/cliente/' + `${delete_query}`, { method: "DELETE" })
    let content = await response.json()
    console.log(content)

    if(content.error) {
        return query_content.innerHTML = 
        `
            <p>Cliente Inexistente!</p>
            <button onclick="deleta_cliente()" style="cursor: pointer"> Voltar</button>
        `
    }
        
    else {
        return query_content.innerHTML =
        `
            <p>Cliente deletado com Sucesso!</p>
            <button onclick="deleta_cliente()" style="cursor: pointer"> Voltar</button>
        `
    }
        
}