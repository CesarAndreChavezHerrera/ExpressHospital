const express = require('express')
const mongoose = require('mongoose')

var Paciente = require('../models/paciente.js')

const router = express.Router()

router.get('/',(req,res)=>{
    console.log("test")
    res.render('paciente/buscar')
})


router.get('/register',(req,res)=>{
    console.log("guardar")
    res.render('paciente/registrarPaciente')
})

router.post('/register',(req,res)=>{
    
    new_data(req,res)
})

function new_data(req,res){
    var data = new Paciente()
    data.dui = req.body.dui
    data.nombre = req.body.nombre
    data.save((err)=>{
        if(!err){
            res.redirect('paciente')
        }
        else
        {
            console.log('error a guardar los datos')
        }
    })
}

module.exports = router
