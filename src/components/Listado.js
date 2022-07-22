import React, { useEffect } from 'react'

export const Listado = (listState, setListState) => {

    //const [listState, setListState] = useState([]);

   

    //relleno el array vacio
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        
        setListState(peliculas);
    }

    useEffect(() => {
        console.log("Componentes del listado de la pelicula cargado!!")
        conseguirPeliculas();
    },[]);


    return (
        <>
            {listState != null ?
                listState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.title}</h3>
                            <p className="description">{peli.description}</p>

                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    );
                })
                : <h2>No hay peliculas para mostrar</h2>
            }
        </>
    )
}
