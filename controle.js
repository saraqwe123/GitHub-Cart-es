let usuario = document.getElementById("iusuario");
let nome = document.getElementById("inome");
let email = document.getElementById("iemail");
let ul = document.getElementById("iul");
let imagem_perfil = document.getElementById("ifoto1");
let imagem_fundo = document.getElementById("ifoto2");

async function acha_perfil() {
  try {
    const response = await axios.get(
       `https://api.github.com/users/${usuario.value}`
    );
    console.log(response.data);
    let informacoes = response.data;
    let nome_git = informacoes.name;
    let email_git = informacoes.email;
    let qtd_repositorios = informacoes.public_repos;
    let avatar = informacoes.avatar_url;
    imagem_perfil.src = avatar;
    imagem_fundo.src = avatar;
    nome.textContent = nome_git;
    email.textContent = email_git;

    const repositorios_url = `https://api.github.com/users/${usuario.value}/repos`;
    const reposResponse = await axios.get(repositorios_url);
    const repositorios = reposResponse.data;

    ul.innerHTML = "";
    for (let i = 0; i < qtd_repositorios; i++) {
      let li = document.createElement("li");
      li.textContent = repositorios[i].name;
      ul.appendChild(li);
      li.style.border = "1px solid black";
      ul.style.height = "20%";
      ul.style.overflowY = "auto";
      ul.style.width = "70%";
      ul.style.position = "relative";
      ul.style.top = "5%";
    }
  } catch (error) {
    console.error("Perfil não encontrado:", error);
  }
}
let botinho = document.getElementById("botao");
botinho.addEventListener("click", acha_perfil);
