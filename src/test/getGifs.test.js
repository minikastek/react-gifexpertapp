import { getGifs } from "../helpers/getGifs"
import React from 'react'

describe('pruebas con getGifs fetch',()=>{

    test('debe traer 10 elementos',()=>{

        const gifs = await getGifs('One Punch');
        expect (gifs.length).toBe(10);

    });
})