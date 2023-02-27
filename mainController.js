const express = require('express')
const Expense = require('../model/expense')

exports.getPostExpense = async(req,res,next)=>{
    const selling = req.body.selling;
    const productName = req.body.productName;

    try {
        const data = await Expense.create({ selling: selling, productName: productName });
        res.status(201).json({ newExpenseDetail: data });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
      
}

exports.getExpense = async(req,res,next)=>{
  const expenses =await Expense.findAll()
  res.status(201).json({allExpense:expenses})
}

exports.deleteExpense = async(req,res)=>{
  console.log(req.params);
  try {
      console.log(req.params);
      const id = req.params.id;
      const product = await Expense.destroy({ where: { id: id } });
      res.json(product)
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
    
}