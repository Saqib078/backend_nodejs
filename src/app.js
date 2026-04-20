const express = require("express")
const nodemailer = require("nodemailer")

const app = express()
app.use(express.json())

const message_contact = [];

app.post('/messagecontact', (req,res) =>{
    message_contact.push(req.body)
    res.status(201).json({
        message:"start now"
    })
})

app.get('/messagecontact',(req,res)=>{
    res.status(200).json({
        contact:message_contact
    })
})


app.delete('/messagecontact/:index', (req,res) =>{
    const index = req.params.index
    delete message_contact[index]
    res.status(200).json({
        message:`delete ${index}`
    })
})


app.patch('/messagecontact/:index', (req,res) =>{
    const index = req.params.index
    const age = req.body.age

    message_contact[index].age=age

    res.status(200).json(
        {
            message:"updated age"
        }
    )
})

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'*******2@gmail.com',
        pass:'*****************'
    }
})

app.post('/send-email', async (req, res) =>{
    const {to , subject , text} = req.body

    try{
        const info = await transporter.sendMail({
            from:'"For Demo" <homesilicon2@gmail.com>',
            to:to,
            subject:subject,
            text:text
        })

        res.status(200).json({
            message:"Email send"
        })
    }
    catch(error){
        res.status(500).json({
            message:"Failed to send"
        })
    }
})


module.exports = app;
