import { Sequelize } from 'sequelize'

const db = new Sequelize('database_fullstack', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db