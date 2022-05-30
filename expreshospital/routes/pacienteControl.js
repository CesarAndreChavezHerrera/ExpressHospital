const express = require('express')
const mongoose = require('mongoose')

var Paciente = require('../models/paciente.js')

const router = express.Router()

router.get('/',(req,res)=>{
    console.log("test")
    res.render('paciente/buscar')
})


router.get('/register',(req,res)=>{
    
    res.render('paciente/registrarPaciente')
})

router.post('/register',(req,res)=>{


    var data = new Paciente()
    data.dui = req.body.dui
    data.nombre = req.body.nombre
    
    Paciente.find((err,docs)=>{

        if (!err){

        
        var coincidencia = false
        d= docs
        d.forEach(element => {
            if (element.dui == data.dui){
                coincidencia = true
            } 
        });

        if( coincidencia === true){
        
            res.redirect('/register',{
                message: "dato ya existente",
                messageClass: "alert-success"
            })
        }
        else{
            console.log("guardar")
            data.save((err)=>{
                if(!err){
                    res.redirect('/paciente')
                }
                else
                {
                console.log('error a guardar los datos')
                }
            })
        }
        }
    
    })
    
    

        

})



module.exports = router
