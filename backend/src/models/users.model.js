import {Schema,model} from "mongoose";

//Schema del Producto
const userSchema = new Schema ({
    nombre_completo:{
        required:true,
        type:String,
    },
    edad : {
        required:true,
        type:Number,
    },
    dni:{
        required:true,
        type:Number,
        unique:true
    },
    nivel_experiencia:{
        required:true,
        type:String,
    },
    tiempo_entrenamiento:{
        required:true,
        type:String
    },
    frecuencia_entrenamiento:{
        required:true,
        type:String
    },
    turno_entrenamiento:{
        required:true,
        type:String
    },
    eleccion_profesor:{
        required:true,
        type:String
    },
    lesiones:{
        required:true,
        type:String
    },
    descripcion_lesion:{
        required:true,
        type:String
    },
    objetivo:{
        required:true,
        type:String
    },
    enfoque:{
        required:true,
        type:String
    },
    competencia_deportiva:{
        type:String
    }
})
//Defno cómo se va a llamar mi modelo y el esquema
export const userModel = model('users', userSchema)
