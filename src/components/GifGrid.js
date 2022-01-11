import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
    // Cada vez que este componente se ejecute, se actualizará toda la página
    // Para eso usaremos el useEffect, pero estará en nuestro Custom Hook
    

    // const [count, setcount] = useState(0);

    // Esto nos permite ejecutar código de manera condicional. Le decime que cuando se cargue
    // la página por primera vez se ejecute getGifs().
    // El [] es un array de dependencias, al no haber nada, 
    // le decimos que no hay ninguna dependencia, disparándose una única vez.
    // Además, hay un warning que da la crossOriginIsolated. Que falta una depedency, category. 
    // Sería útil tenerla en cuenta no vayamos a cambiar la category en mitad de la ejecución
    // y por tanto se tengan que cambiar las imágenes que muestra
    // Por eso se lo ponemos dentro de [], para decirle que es una dependencia.
    // Aunque en este caso, no se va a modificar
    // useEffect( () => {
    //     // Cuando el componente que es renderizado por la 1ª vez, que se ejecute
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] );



    

    // Lo hemos quitado porque así cuando un componente se tenga que refrescar, 
    // no reinicie el estado de todo el componente y se vuelva a ejecutar tan normal
    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            // Cada una de las propiedades de IMG se mandan como props
                            { ...img }
                        />
                    ) )
                }

            </div> 
            
                {/* <h3>{ count }</h3>
                <button onClick={ () => setcount( count + 1 ) }></button> */}
                {/* Con esto estamos sacando las imágenes que hemos obtenido de la API */}
                {/* <ol>
                    {images.map( ({ id, title }) => (
                        <li key={ id }>{ title }</li>
                    ))}
                </ol>*/}

                {/* {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            // Cada una de las propiedades de IMG se mandan como props
                            { ...img }
                        />
                    ) )
                } */}


            
        </>
    );

}
