import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { AddCategory } from '../components/AddCategory'


describe('pruebas en el componente',()=>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks(); //se llama para limpiar funciones y demas
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    }) 
    //esta funcion esta para que antes de cada prueba se limpie todo
    //y se inicialice de buena manera

    test('debe de mostrarse correctamente',()=>{

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto',()=>{

        const input=wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change',{target: {value: value}});

        expect (wrapper.find('p').text().trim()).toBe(value)
    })

    test('no debe de postear la informacion con submit',()=>{

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de text', () => {
        
        //1. simular el inputChange

        const value= 'Hola Mundo';

        const input=wrapper.find('input');

        input.simulate('change',{ target: { value } });

        //2. simular el submit

        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        //3. se debe haber llamado el setCategories

        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(2);
        //expect(setCategories).toHaveBeenCalledWith(expect.any(function));

        //4. el valor del input debe de estar ''

        expect(input.prop('value')).toBe('');
    })
    
})