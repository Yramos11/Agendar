import express from "express"
const app = express()

import hndbrs from "express-handlebars"
const handlebars = hndbrs

import handlebarsHelpers from "handlebars-helpers";
const { contains } = handlebarsHelpers();

import Clientes from "./models/clientes.js"
const clientes = Clientes

app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    helpers: {
        contains: function (horariosAgendados, dia, hora) {
            return horariosAgendados.some(item => item.dia === dia && item.hora === hora);
        }
    }})
);

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.post("/enviado", function(req, res){

    clientes.create({

        nome: req.body.nome,
        dia: req.body.dia,
        hora: req.body.hora
    }).then(function(cliente){

        res.render("enviado", { nomeCliente: cliente.nome, diaMarcado: cliente.dia, horaMarcada: cliente.hora})
    }).catch(function(erro){

        console.log(erro)
    })
})

app.get("/", async function(req, res){

    try {
        const agendamentos = await clientes.findAll({ raw: true });

        const horariosAgendados = agendamentos.map(agendamento => ({
            dia: agendamento.dia,
            hora: agendamento.hora
        }));

        res.render("form", { horariosAgendados });

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao buscar agendamentos");
    }
})

app.listen(8081, function(){

    console.log("servidor rodando")
})