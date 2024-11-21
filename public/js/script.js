import verificaData from "./verificaData.js"

const dia = document.querySelector("#dia")
const horas = document.querySelectorAll(".horas")
const botao = document.querySelector("button")

let valorDia

window.selecionaDia = function(){

    valorDia = dia.value

    if(valorDia == "segunda"){

        horas[0].style.display = "flex"

    } else {

        horas[0].style.display = "none"
    }

    if(valorDia == "terça"){

        horas[1].style.display = "flex"

    } else {

        horas[1].style.display = "none"
    }
}

botao.addEventListener("click", verificaData)

export function diaSelecionado(){

    return valorDia;
}