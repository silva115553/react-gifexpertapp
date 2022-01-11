import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// GifExpertApp
// <h2>GifExpertApp</h2>
// <hr/>

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samirai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // No se puede hacer esto porque se rompe. 
    //     // Y se rompe porque estoy eliminando el objeto que tenía antes y pongo 
    //     // solo un objeto.
    //     // setCategories('HunterXHunter');
    //     // De esta manera sí que funciona, porque le estoy diciendo que quiero hacer un 
    //     // un array con los elementos anterior y añadir el HunterXHunter
    //     setCategories( [...categories, 'HunterXHunter'] );

    //     // Esto se puede hacer también
    //     // setCategories( cats => [...cats, 'HunterXHunter'] );

    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* Quiero poner una lista con las categorías */}
            <ol>
                {
                    // El índice tiene que ser único, por loq ue es importante hacer algo
                    // para que no tenga números duplicados
                    categories.map( category => (
                        // <li key={ category }> { category } </li>
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    );
}
