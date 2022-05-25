async function todos_clientes() {    
    const query_content = document.querySelector("#query_content")
    query_content.innerHTML = ""
    let response = await fetch('/clientes/')
    let content = await response.json()
    console.log(content)
    content.forEach((ell)=> {

        query_content.innerHTML += `<p>Nome: ${ell.nome} CPF_CNPJ: ${ell.cpf_cnpj} Cliente<p/><hr>`

    })  
    
}