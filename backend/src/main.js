//MODULOS
import express from 'express';
import {Server} from 'socket.io';
import cors from 'cors';
import morgan from 'morgan';
import mongoConnect from './config.js';
import formRouter from './Routes/formulario.routes.js';
const PORT = 4000
const app = express()

//Inicio mi servidor MongoDB
mongoConnect();

//Server
const server = app.listen(PORT,()=>{
    console.log("SV CONECTADO CORRECTAMENTE", PORT)
})

//Se ubica acá arriba apropósito porque Socket io necesita saber la configuración de los servidores
const io = new Server(server);  //Inicio el server WebSocket


//Middlewares
app.use(express.urlencoded({extended:true})); //Se utiliza para optimizar la búsqueda en las rutas
app.use(express.json()); //Se utiliza para que mis rutas puedan leer archivos json
app.use(cors())
app.use(morgan('dev'))
app.use('/prueba',(req,res)=>{
    res.send("Conectado RIGHT NOW")
})
app.use('/',formRouter);
app.get('/*',(req,res)=>{   //Ruta con error 404 que se utiliza a nivel general
    res.send("Error 404: Page not found");
})