import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>{

        const [state, setState] = useState({
            data:[],
            loading: true
        });

        useEffect( ()=>{

            getGifs(category)
                .then( imgs=>{
                        setState({
                            data:imgs,
                            loading:false
                        })
                });
                
        }, [category])

        // el , [] esta hecho para que el codigo use efect solo se 
        // ejecute 1 vez, category entre los [ significa que si cambia category de 
        // alguna forma se ejecuta de nuevo]

    return state; //{data:[],loading:true};
}