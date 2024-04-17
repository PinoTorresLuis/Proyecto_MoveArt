import 'dotenv/config.js'; //Permite utilizar variables de entorno
import mongoose from 'mongoose';

//Archivo JS donde conecto mi proyecto con MongoDB
export default function mongoConnect(){
mongoose.connect('mongodb+srv://move:move123@proyecto-rutinas-views.rhunzer.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto-Rutinas-Views')
.then(async()=>{
  console.log("DB conectada");
})
.catch((e)=>console.log("Error en conexión a MONGO DB Atlas", e));
}
