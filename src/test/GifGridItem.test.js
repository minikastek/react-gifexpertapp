import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../components/GifGridItem'

describe('Pruebas a GifGridItem',()=>{

    const title ='un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('debe mostrar el componente correcto',()=>{

        
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de tener un parrafo con el titulo',()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props',()=>{
        const img = wrapper.find('img');
        //console.log(img.props('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    })

    test('debe de tener animate bounce', () => {
        
        const div=wrapper.find('div');
        const className=div.prop('className');
        //console.log(div.prop('className')) esto hice para probar 
        expect(className.includes('animate__bounceIn')).toBe(true);
    })
    
})

