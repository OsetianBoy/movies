import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = (setListState) => {

    const titleComponent = "Agregar pelicula";

    const [ peliState,setPeliState ] = useState({
        title: '',
        description: ''
    });

    //destructuracion del objeto
    const {title, description} = peliState;

    const getFormValues = e =>{
        e.preventDefault();

        //Tomar datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Creo objeto de la peli, guardo
        let peli ={
            id: new Date().getTime(),
            title,
            description
            
        };
        //guardo el estado
        setPeliState(peli);

        //Actualizo el estado del listado principal // agrego a los items(elementos)que habia, uno nuevo
        setListState(items =>{
            return[...items, peli];
        });

        //guardo en el local storage
        GuardarEnStorage("pelis", peli);
        
    }
    

  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>

        <strong>
            {/* si se cumple esta condicion, mostrar titulo */}
            {(title && description) && "Has agregado una pelicula: "+title}
        </strong>

        <form onSubmit={getFormValues}>
            <input      type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Titulo"/>
                    
            <textarea 
                        id="description"
                        name="description" 
                        placeholder="Descripcion"></textarea>

            <input      type="submit"
                        id="save" 
                        value="Guardar"/>
        </form>
    </div>
  )
}
