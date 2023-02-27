const Sequelize=require('sequelize');
const sequelize=require('../util/database')

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    selling:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    productName:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Expense