import { userModel } from "../models/users.model";

export const sendForm = async(req,res)=>{
    const {nombre_completo,edad,dni,nivel_experiencia,tiempo_entrenamiento,frecuencia_entrenamiento,turno_entrenamiento,eleccion_profesor,lesiones,descripcion_lesion,objetivo,enfoque,competencia_deportiva } = req.body

    try {
        const form = await userModel.create({
            nombre_completo,edad,dni,nivel_experiencia,tiempo_entrenamiento,frecuencia_entrenamiento,turno_entrenamiento,eleccion_profesor,lesiones,descripcion_lesion,objetivo,enfoque,competencia_deportiva
        })
        if (form){
            return res.status(200).send({resultado:'Formulario enviado correctamente', message:form})
        }
    } catch (e) {
        res.status(500).send({error:"No se pudo enviar el formulario",e})
    }
}