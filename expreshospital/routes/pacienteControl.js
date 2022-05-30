const express = require('express')
const mongoose = require('mongoose')

var Paciente = require('../models/paciente.js')

const router = express.Router()

router.get('/',(req,res)=>{
    console.log("test")
    res.render('paciente/buscar')
})


router.get('/register',(req,res)=>{
<<<<<<< HEAD
    
=======
    console.log("guardar")
>>>>>>> 18b7edd7d218abff3b56785794e795f9fce0ca4d
    res.render('paciente/registrarPaciente')
})

router.post('/register',(req,res)=>{
<<<<<<< HEAD


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


=======
    
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
>>>>>>> 18b7edd7d218abff3b56785794e795f9fce0ca4d

module.exports = router
