let caixaTexto = document.querySelector("input");
let iniciar = document.querySelector("#iniciar");
let tentar = document.querySelector("#tentar");
let pontuacao = document.querySelector(".pontuacao");
let foto = document.querySelector("img");
let pontos = document.querySelector("#pontos");
let contador = 0;



pontos.innerHTML = contador;
pesquisarPersonagem = () =>{
    let aleatorio = Math.floor(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        foto.src = data.image;
        console.log(data.name);
        
        verificar=()=>{
            let input = caixaTexto.value.toUpperCase().toString();
            let nomeDoPersonagem = data.name.toUpperCase().toString();

            console.log(input)
            if (caixaTexto !== "" && nomeDoPersonagem === input){
                contador ++;
                pontos.innerHTML = contador;
                pesquisarPersonagem();
            } else{
                pontos.innerHTML = "Poxa, você perdeu! Tente novamente"
                pesquisarPersonagem();
            } 
            caixaTexto.value = "" ; 
        }
        tentar.onclick = verificar;
    })
}    



iniciar.onclick = pesquisarPersonagem;