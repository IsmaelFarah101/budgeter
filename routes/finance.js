let express = require('express')
let Savings = require('../models').Savings
let Bills = require('../models').Bills
let Income = require('../models').Income
let router = express.Router()
    
router.get('/savings', function(req,res,next){
    Savings.findAll({order: ['id']})
    .then(savings => {
        return res.json(savings)
    })
    .catch(err => next.err)
})
router.get('/income', function(req,res,next){
    Income.findAll({order:['id']})
    .then(income => {
        return res.json(income)
    })
    .catch(err => next.err)
})
router.get('/bills', function(req,res,next){
    Bills.findAll({order:['id']})
    .then(bills => {
            res.json(bills)    
    })
    .catch(err => next.err)
})
router.post('/savings', function(req,res,next){
    Savings.create(req.body).then((data) => {
        return res.status(201).send('ok')
    })
})
router.post('/income', function(req,res,next){
    Income.create(req.body)
    .then(data => {
        return res.status(201).send('ok')
    })
})

router.post('/bills', function(req,res,next){
    Bills.create(req.body)
    .then(data => {
        return res.status(201).send('ok')
    })
})

router.patch('/bills/:id', function(req,res,next){
    Bills.update({paid:req.body.paid}, {where: {id:req.params.id}})
    .then(rows => {
        if(rows){
            return res.send('ok')
        }else{
            return res.status(404).send()
        }
    }).catch(err => next.err())
})
router.delete('/savings/:id', function(req,res,next){
    Savings.destroy({where: {id:req.params.id}})
    .then(() => {
        return res.send('ok')
    })
    .catch(err => next.err(err))
})

router.delete('/income/:id', function(req,res,next){
    Income.destroy({where: {id:req.params.id}})
    .then(() => {
        return res.send('ok')
    })
    .catch(err => next.err(err))
})

router.delete('/bills/:id', function(req,res,next){
    Bills.destroy({where: {id:req.params.id}})
    .then(() => {
        return res.send('ok')
    })
    .catch(err => next.err(err))
})
module.exports = router