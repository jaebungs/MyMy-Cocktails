import React, { useState, useEffect } from 'react';
import { useSelect, useDispatch } from 'react-redux';
import CocktailCards from './card/CocktailCards';

const HomePage = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/cocktails')
        .then((res)=>res.json())
        .then((data)=>console.log('success', data))
        .catch((err)=>console.log('fetch error', err))
    }, [])

    return (
        <div>
            <h1>home page</h1>
            
        </div>
    )
}

export default HomePage;