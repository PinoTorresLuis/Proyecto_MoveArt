//MODULOS
import express from 'express';

const PORT = 4000
const app = express()

//Server
const server = app.listen(PORT,()=>{
    console.log("SV CONECTADO CORRECTAMENTE", PORT)
})


//Middlewares
app.use(express.urlencoded({extend:true}));

app.use('/prueba',(req,res)=>{
    res.send("Conectado RIGHT NOW")
})