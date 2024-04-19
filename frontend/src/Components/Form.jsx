import {useRef } from 'react';

export const Form = ()=>{
    const formRef = useRef(null)//Guarda una referencia del formulario
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const datForm = new FormData(formRef.current)//Transforma un html en un objetivo iterable
        const data = Object.fromEntries(datForm)//Dado un objeto iterador lo transforma en un objeto simple
        console.log(data)
        try {
            const response = await fetch('http://localhost:4000/enviarFormulario',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data)
            })
            console.log("Formulario enviado correctamente:", response);
        } catch (error) {
            console.log("Error al enviar el formulario", error);
        }
    }

    
    return(
        <div className='row'>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className='mb-3'>
                    <label htmlFor="nombre_completo">Nombre y Apellido</label>
                    <input type="text" id="name" name="nombre_completo" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="edad">Edad</label>
                    <input type="number" id="edad" name="edad" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="dni">DNI</label>
                    <input type="number" id="dni"
                     name="dni"/>
                </div>     
                <div className='mb-3'>
                    <label htmlFor="nivel_experiencia">Nivel de Experiencia</label>
                    <input type="text" id="nivel_experiencia" name="nivel_experiencia"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="tiempo_entrenamiento">Nivel de entrenamiento</label>
                    <input type="text" id="tiempo_entrenamiento" name="tiempo_entrenamiento"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="frecuencia_entrenamiento">Frecuencia de entrenamiento</label>
                    <input type="text" id="frecuencia_entrenamiento" name="frecuencia_entrenamiento"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="turno_entrenamiento">Turno de entrenamiento</label>
                    <input type="text" id="turno_entrenamiento" name="turno_entrenamiento"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="lesiones">Lesiones</label>
                    <input type="text" id="lesiones" name="lesiones"/>
                </div>
                <div className='mb-3'>    
                    <label htmlFor="descripcion_lesion">Descripcion de lesion</label>
                    <input type="text" id="descripcion_lesion" name="descripcion_lesion"/>
                </div> 
                <div className='mb-3'>   
                    <label htmlFor="objetivo">Objetivo</label>
                    <input type="text" id="objetivo" name="objetivo"/>
                </div> 
                <div className='mb-3'>   
                    <label htmlFor="enfoque">Enfoque</label>
                    <input type="text" id="enfoque" name="enfoque"/>
                </div>
                <div className='mb-3'>    
                    <label htmlFor="competencia_deportiva">Competencia deportiva</label>
                    <input type="text" id="competencia_deportiva" name="competencia_deportiva"/>
                </div> 
                <div className='mb-3'>   
                    <label htmlFor="eleccion_profesor">Eleccion de profesor</label>
                    <input type="text" id="eleccion_profesor" name="eleccion_profesor"/>
                </div>
                <button type="submit"  className='btn btn-dark'>Enviar</button>
            </form>
        </div>
    )
}