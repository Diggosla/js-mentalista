function Chutar() {
    /*LET é uma palavra para criar uma variavel  */
    let numeroSecreto = Math.floor(Math.random () * 5) +1
    console.log(numeroSecreto)
    let chute = document.getElementById("valor").value
    let feliz = '<img src="imagens/feliz.png" width="50" height="50 ">'
    let triste = '<img src="imagens/triste.png" width="50" height="50 ">'


    
    if (chute == numeroSecreto) {
        //verdadeiro
        document.getElementById("resultado").innerHTML = feliz 
        
    }
    else {
        //falso
        document.getElementById("resultado").innerHTML = triste
    }
}
