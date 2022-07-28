import React from "react";
import {shallow} from 'enzyme'
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock('../hooks/useFetchGifs');

describe('Pruebas en GifGrid',()=>{

    const category ='One Punch';

    test('prueba de snapshot ',()=>{

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imagenes',()=>{

        const gifs =[{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquiero cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })

})