import React from 'react'

export const GifGridItem = ( {title, url} ) => {


    return (
        // Se pone en el div un className porque class es una palabra
        // reservada de JavaScript, por lo que así no tenemos problema
        // para usar esa palabra reserveda. Luego en el código fuente de la 
        // página web se ve como div class 
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
