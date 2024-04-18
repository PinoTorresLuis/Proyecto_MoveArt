import { useState } from 'react';
import axios from 'axios';

export const Form = ()=>{
    const [formData,setFormData] = useState({
    nombre_completo:"",
    edad:"",
    dni: "",
    nivel_experiencia:"",
    tiempo_entrenamiento:"",
    frecuencia_entrenamiento:"",
    turno_entrenamiento:"",
    eleccion_profesor:"",
    lesiones:"",
    descripcion_lesion:"",
    objetivo:"",
    enfoque:"",
    competencia_deportiva:""
    })
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/enviarFormulario')
            console.log("Formulario enviado correctamente:", response.data);
        } catch (error) {
            console.log("Error al enviar el formulario", error);
        }
    }

    
    return(
        <div>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre_completo">Nombre y Apellido</label>
                    <input type="text" id="name" name="nombre_completo" 
                    value={formData.nombre_completo} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="edad">Edad</label>
                    <input type="number" id="edad" name="edad" value={formData.edad} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <input type="number" id="dni"
                     name="dni" value={formData.dni} onChange={handleChange} required />
                </div>     
                <div>
                    <label htmlFor="nivel_experiencia">Nivel de Experiencia</label>
                    <input type="text" id="nivel_experiencia" name="nivel_experiencia" 
                    value={formData.nivel_experiencia} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="tiempo_entrenamiento">Nivel de entrenamiento</label>
                    <input type="text" id="tiempo_entrenamiento" name="tiempo_entrenamiento" 
                    value={formData.tiempo_entrenamiento} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="frecuencia_entrenamiento">Frecuencia de entrenamiento</label>
                    <input type="text" id="frecuencia_entrenamiento" name="frecuencia_entrenamiento" 
                    value={formData.frecuencia_entrenamiento} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="turno_entrenamiento">Turno de entrenamiento</label>
                    <input type="text" id="turno_entrenamiento" name="turno_entrenamiento" 
                    value={formData.turno_entrenamiento} 
                    onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="lesiones">Lesiones</label>
                    <input type="text" id="lesiones" name="lesiones" 
                    value={formData.lesiones} 
                    onChange={handleChange} required />
                </div>
                <div>    
                    <label htmlFor="descripcion_lesion">Descripcion de lesion</label>
                    <input type="text" id="descripcion_lesion" name="descripcion_lesion" 
                    value={formData.descripcion_lesion} 
                    onChange={handleChange} required/>
                </div> 
                <div>   
                    <label htmlFor="objetivo">Objetivo</label>
                    <input type="text" id="objetivo" name="objetivo" 
                    value={formData.objetivo} 
                    onChange={handleChange} required/>
                </div> 
                <div>   
                    <label htmlFor="enfoque">Enfoque</label>
                    <input type="text" id="enfoque" name="enfoque" 
                    value={formData.enfoque} 
                    onChange={handleChange} required/>
                </div>
                <div>    
                    <label htmlFor="competencia_deportiva">Competencia deportiva</label>
                    <input type="text" id="competencia_deportiva" name="competencia_deportiva" 
                    value={formData.competencia_deportiva} 
                    onChange={handleChange} required/>
                </div> 
                <div>   
                    <label htmlFor="eleccion_profesor">Eleccion de profesor</label>
                    <input type="text" id="eleccion_profesor" name="eleccion_profesor" 
                    value={formData.eleccion_profesor} 
                    onChange={handleChange} required/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}