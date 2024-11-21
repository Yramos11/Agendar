import db from "./db.js"

const clientes = db.sequelize.define("clientes", {

    nome: {

        type: db.Sequelize.STRING,
        required: true
    },

    dia: {

        type: db.Sequelize.STRING,
        required: true
    },

    hora: {

        type: db.Sequelize.STRING,
        required: true
    }
})

//clientes.sync({force: true})

export default clientes