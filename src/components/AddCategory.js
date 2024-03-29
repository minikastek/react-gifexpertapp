import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    //usar el use state con string vacio para evitar errores
    const [inputValue, setinputValue] = useState(''); 

    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
        //console.log('Submit Hecho')
        setCategories(cats=>[inputValue,...cats]);
        setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>    
    )
}

AddCategory.prototype={
    setCategories: PropTypes.func.isRequired
}