async function cria_cliente() {
    event.preventDefault()
    let empresa = document.querySelector("#empresa").value
    let nome = document.querySelector("#nome").value
    let data_nascimento = document.querySelector("#data").value
    let cpf_cnpj = document.querySelector("#cpf_cnpj").value
    let email = document.querySelector("#email").value
    let telefone = document.querySelector("#telefone").value
    let observacao = document.querySelector("#observacao").value

    let lucro_real = document.querySelector("#lucro_real").checked
    let lucro_presumido = document.querySelector("#lucro_presumido").checked
    let simples_nacional = document.querySelector("#simples_nacional").checked
    let mei = document.querySelector("#mei").checked


    const obj =
    {
        "empresa": String(empresa),
        "nome": nome,
        "data_nascimento":String(data_nascimento),
        "cpf_cnpj": String(cpf_cnpj),
        "email": String(email),
        "telefone": String(telefone),
        "nota": observacao,
        "lucro_real": lucro_real,
        "lucro_presumido": lucro_presumido,
        "simples_nacional": simples_nacional,
        "mei": mei
    }
   
    let response = await fetch("/cliente", {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    response = await response.json()
    console.log(response)
}


