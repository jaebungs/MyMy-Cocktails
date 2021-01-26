import React, { useState, useEffect } from 'react';
import { useSelect, useDispatch } from 'react-redux';
import FilterButton from './inputs/filterButton';



const MyBarPage = () => {

    useEffect(()=>{
        
    }, [])

    return (
        <div>
            <FilterButton />
            <h1>My Bar</h1>
            <p>Not built yet...</p>
            <p>User can bookmark cocktails and Rate.</p>
        </div>
    )
}

export default MyBarPage;