const express = require("express");

const router = express.Router();
const Expense=require('../model/expense')
const sequelize=require('../util/database')
const Sequelize=require('sequelize')
const mainController = require('../controller/mainController')

router.get('/expense/get-expense', mainController.getExpense)

router.post('/expense/add-expense', mainController.getPostExpense)

router.delete('/expense/delete/:id', mainController.deleteExpense)

module.exports=router


