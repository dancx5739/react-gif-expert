import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // Si el inputValue <= a 1 termina la funcion
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={ inputValue }
                onChange= { onInputChange }
            />
        </form>
    )

}
