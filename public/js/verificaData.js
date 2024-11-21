import { diaSelecionado } from "./script.js"

const horarios = document.querySelectorAll(".form-check-input")

const nome = document.querySelector(".nome")
const dia = document.querySelector("#dia")
const horas = document.querySelectorAll(".horas")

function verificaData(){

    let horarioSelecionado = verificaHorario()
    let valorDia = diaSelecionado()

    if(valorDia == "segunda"){

        if(horarioSelecionado == "9h"){

            setTimeout(() =>{

                horarios[0].setAttribute("disabled", "")
            }, "1000")            
        }else if(horarioSelecionado == "10h"){
    
            setTimeout(() =>{

                horarios[1].setAttribute("disabled", "")
            }, "1000")    
        }else if(horarioSelecionado == "11h"){
    
            setTimeout(() =>{

                horarios[2].setAttribute("disabled", "")
            }, "1000")    
        }else if(horarioSelecionado == "12h"){
    
            setTimeout(() =>{

                horarios[3].setAttribute("disabled", "")
            }, "1000")    
        }
    }

    if(valorDia == "terca"){

        if(horarioSelecionado == "9h"){

            setTimeout(() =>{

                horarios[4].setAttribute("disabled", "")
            }, "1000")    
        }else if(horarioSelecionado == "10h"){
    
            setTimeout(() =>{

                horarios[5].setAttribute("disabled", "")
            }, "1000")    
        }else if(horarioSelecionado == "11h"){
    
            setTimeout(() =>{

                horarios[6].setAttribute("disabled", "")
            }, "1000")    
        }else if(horarioSelecionado == "12h"){
    
            setTimeout(() =>{

                horarios[7].setAttribute("disabled", "")
            }, "1000")    
        }
    }

    limparForms()
}

function verificaHorario(){

    let horarioSelecionado

    horarios.forEach(function(horario){

        if(horario.checked){

            horarioSelecionado = horario.defaultValue
        }
    })

    return horarioSelecionado
}

function limparForms(){

    setTimeout(() => {

        nome.value = ""
        dia.value = ""
        horas.forEach(hora => hora.style.display = "none")
        horarios.forEach(horario => horario.checked = false);
    }, "2000")
}

export default verificaData