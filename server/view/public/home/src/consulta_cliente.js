
async function consulta_cliente() {
    const cpf_cnpj = document.querySelector("#cpf_cnpj").value
    const query_content = document.querySelector("#query_content")
    let response = await fetch('/cliente/' + `${cpf_cnpj}`)
    let content = await response.json()
    console.log(content)
    if(content.error)
        return query_content.textContent = "Cliente Inexistente!"
    
    query_content.innerHTML = 
    `<p>Nome: ${content.nome}</p>
    <p>CPF_CNPJ: ${content.cpf_cnpj}</p>
    <p>E-mail: ${content.email}</p>
    <p>Telefone: ${content.telefone}</p>
    <p>Empresa: ${content.empresa}</p>
    <p>Telefone: ${content.telefone}</p>
    <p>Data de Nascimento: ${content.data_nascimento}</p>
    `
    if(content.lucro_real)
        query_content.innerHTML += `<p>Lucro Real</p>`

    else if(content.lucro_presumido)
        query_content.innerHTML += `<p>Lucro Presumido</p>`

    else if(content.lucro_presumido)
        query_content.innerHTML += `<p>Simples Nacional</p>`

    else if(content.mei)
        query_content.innerHTML += `<p>Mei</p>`

    query_content.innerHTML += `<textarea rows="15" cols="43" style="resize:none" readonly>${content.nota}</textarea>`
}



