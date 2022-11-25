import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        // si categories ya tiene el elemento de newCategory termina la funcion
        if ( categories.includes(newCategory) ) return;
        
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExperteApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory = { value => onAddCategory(value) }
            />


            {/* Listado de Gif */}
            {
                categories.map( ( category ) => (
                    <GifGrid
                        key={ category }
                        category= { category }
                    />
                ))
            }

        </>
    )
}
