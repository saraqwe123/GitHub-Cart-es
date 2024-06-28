let usuario = document.getElementById("iusuario")
let user = document.getElementById("nome")
let email = document.getElementById("email")
let adicionar = document.getElementById("botao")
let perfil = `https://api.github.com/users/${usuario}7D`

function seleciona_usuario(event) {
    if (event.target.id !== "botao" && usuario.value.trim() === "") {
        alert("Digite o nome do usuário, por favor!")
    }

    fetch(perfil) //fazendo a requisição das informaç~es
        .then(data => {
            inform_perfil(data)
        })

        .catch(error => {
            console.error('Erro na requisição:', error)
        })

        if (!response.ok) {
            throw new Error(`Erro ao buscar o perfil: ${response.status}`) //verificando se a requisição foi bem sucedida
            
        } 

                

}

document.getElementById("botao").addEventListener("click", seleciona_usuario);