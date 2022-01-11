import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {

    // Tiene que terner un tipo de estado
    // Hay que poner un String vacío, porque si no sería undefined
    const [inputValue, setInputValue] = useState('');

    // Ahora con esta función que dispara el escribir en el campo, 
    // el input value va a ser el valor más reciente escrito
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        // Para prevenir el comportamiento por defecto del formulario
        e.preventDefault();

        // console.log('Submit hecho');

        // Usamos esta instrucción, porque no tenemos las categorías, 
        // como tenemos un callback con el estado anterior, somos capaces
        // de usarla. 
        // Con inputValue somos capaces de cogeer el valor  que se mete
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }

    };

    return (
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form> 
    )
}

// Con esto, hacemos que sea obligatorio pasar la función setCategories dentro de 
// propTypes. Ponemos un candado con la obligación de las funciones que hay que pasar
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
