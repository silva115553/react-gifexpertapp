// Vamos a crear el primer Hook, los Hooks no son más que funciones
import { useEffect, useState } from "react";
// import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    // Los Hooks también pueden tener estado
    // Cuando se use por 1ª vez se verá esto
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Que se dispare la petición solo si nuestra categoría cambia
    // Los useEffect no pueden ser async, porque esperan algo síncrono
    useEffect( () => {  

        getGifs( category )
            .then( imgs => {

                console.log(imgs);
                setState({
                    data: imgs, 
                    loading: false,
                });

            } )
            // Solo evaluaremos esto cuando la categoría cambie
    }, [category]);

    // Funcionan los Hooks como si fueran Functional Components
    // setTimeout( () => {
    //     setState({
    //         data: [1, 2, 3, 4, 5],
    //         loading: false,
    //     })
    // }, 3000 );

    return state; // {data: [], loading: true};

}
