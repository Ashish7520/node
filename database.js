const Sequelize=require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Ashish@2000',{
    dialect:'mysql', host:'localhost' 
})

module.exports=sequelize