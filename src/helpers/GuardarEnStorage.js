export const GuardarEnStorage = (clave, element) =>{

    //consigo elementos q ya estan en el localStorage
    let items = JSON.parse(localStorage.getItem(clave));

    console.log(items);
            
    //compruebo si es array
    if(Array.isArray(items)){
        //Agregar un nuevo elemento al array
        items.push(element);
    }else{
        //o crear un array con elemento nuevo
        items = [element]; 
    }

    //guardo en el localStorage
    localStorage.setItem(clave, JSON.stringify(items));     

    //devuelvo el objeto guardado
    return element;

};