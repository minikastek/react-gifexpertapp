import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//creacion rapida de elemento escriban rafc

//cada categories tiene un indice que se podria usar como
//(category,i) y usarlo luego en el li pero el tema es que
//dependemos de que el arreglo este bien, un cambio y se pierde

export const GifExpertApp = () => {

    // const categories=['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd=()=>{
    //    //setCategories( ['HunterXHunter',...categories] );
    //    setCategories(cats=>[...cats,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {  
                    categories.map(category=>(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        
            
        </>
    );
}
