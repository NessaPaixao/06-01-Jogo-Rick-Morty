let caixaTexto = document.querySelector("input");
let iniciar = document.querySelector("#iniciar");
let tentar = document.querySelector("#tentar");
let pontuacao = document.querySelector("#pontuacao");
let foto = document.querySelector ("img")

pesquisarPersonagem = () =>{
    let aleatorio = Math.floor(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        foto.src = data.image;
        console.log(data.name);
        let nomeDoPersonagem = data.name.toUpperCase().toString();
        tentar.onclick = function(){
            let input = caixaTexto.value.toUpperCase().toString();
            if (nomeDoPersonagem == input){
                alert ("voce acertou!")
            } else{
                alert ("vc errou")
            }
        };
    })
}    

function pontuacao(){
    if (input = true) contador >>
    }


iniciar.onclick = pesquisarPersonagem;