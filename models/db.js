import { Sequelize } from "sequelize"

const sequelize = new Sequelize("agendar", "root", "root", {

    host: "localhost",
    dialect: "mysql"
})

export default {Sequelize, sequelize}