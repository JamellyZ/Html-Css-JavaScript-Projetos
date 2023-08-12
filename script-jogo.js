function aleatorio(){
    var dados = ["","pedra", "papel", "tesoura"]
    let randomInt = dados[Math.ceil(Math.random() * (3))]    
    return randomInt
}

function limpar(){
    var pe = document.getElementById("pedra")
    var pa = document.getElementById("papel")
    var te = document.getElementById("tesoura")
    pedra.innerHTML = pe.setAttribute("src", "p.png")
    papel.innerHTML = pa.setAttribute("src", "papel.png")
    tesoura.innerHTML = te.setAttribute("src", "tesoura.png")
}

//A partir da escolha do usuario gera a o resultado aqui
function opcoes(empate,derrota){
    var escolha = document.getElementById(empate)
    var resultado = document.getElementById("resultado")
    var resposta = document.getElementById("foto")
    randomInt = aleatorio()
    resultado.innerHTML = randomInt
    limpar()
    if(randomInt == empate){
        resultado.innerHTML = resultado.setAttribute("src","empate.png")
        document.body.style.background = "#EEDD82"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-empate.png")
        resposta.innerHTML = resposta.setAttribute("src", empate + "-empate.png")
    }else if(randomInt == derrota){
        resultado.innerHTML = resultado.setAttribute("src", "derrota.png" )
        document.body.style.background = "#CD4F39"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-derrota.png")
        resposta.innerHTML = resposta.setAttribute("src", randomInt + "-derrota.png")
    }else{
        resultado.innerHTML = resultado.setAttribute("src", "vitoria.png" )
        document.body.style.background = "#00FF7F"
        escolha.innerHTML = escolha.setAttribute("src", empate + "-vitoria.png")
        resposta.innerHTML = resposta.setAttribute("src", randomInt + "-vitoria.png")
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
