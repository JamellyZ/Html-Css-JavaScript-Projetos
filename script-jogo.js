function aleatorio(){
    var dados = ["","pedra", "papel", "tesoura"]
    let randomInt = dados[Math.ceil(Math.random() * (3))]    
    return random
}

function limpar(){
    var p = document.getElementById("pedra")
    var papel = document.getElementById("papel")
    var tesoura = document.getElementById("tesoura")
    pedra.innerHTML = pedra.setAttribute("src", "pedra.png")
    papel.innerHTML = papel.setAttribute("src", "papel.png")
    tesoura.innerHTML = tesoura.setAttribute("src", "tesoura.png")
}

function opcoes(empate,derrota){
    var escolha = document.getElementById(empate)
    var resultado = document.getElementById("resultado")
    var resposta = document.getElementById("foto")
    random = aleatorio()
    resultado.innerHTML = random
    limpar()
    if(random == empate){
        resultado.innerHTML = resultado.setAttribute("src","empate.png")
        document.body.style.background = "#EEDD82"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-empate.png")
        resposta.innerHTML = resposta.setAttribute("src", empate + "-empate.png")
    }else if(random == derrota){
        resultado.innerHTML = resultado.setAttribute("src", "derrota.png" )
        document.body.style.background = "#CD4F39"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-derrota.png")
        resposta.innerHTML = resposta.setAttribute("src", random + "-derrota.png")
    }else{
        resultado.innerHTML = resultado.setAttribute("src", "vitoria.png" )
        document.body.style.background = "#00FF7F"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-vitoria.png")
        resposta.innerHTML = resposta.setAttribute("src", random + "-vitoria.png")
    }
}

function ativarPedra(){
    opcoes("pedra", "papel")
}

function ativarPapel(){
    opcoes("papel", "tesoura")
}

function ativarTesoura(){
    opcoes("tesoura", "pedra")
}
