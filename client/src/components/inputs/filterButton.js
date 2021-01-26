import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { liquorTypes } from '../../actions/cocktails';
import { searchHomeByName, searchHomeByLiquor, searchMyByName, searchMYByLiquor } from '../../actions/filters';
import { Box, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const FilterButton = () => {
    
    const [checkedTypes, setCheckedTypes] = useState([]);
    const dispatch = useDispatch();
    const pathname = window.location.pathname;

    // When liquor filter clicked, dispatch to pathnamebyLiquor
    useEffect(()=>{
        if(pathname === '/') {
            dispatch(searchHomeByLiquor(checkedTypes))
        } else if (pathname==='/mybar') {
            dispatch(searchMYByLiquor(checkedTypes))
        }
    }, [checkedTypes])

    const handleChange = (e) => {
        const liquor = e.target.value;

        if (checkedTypes.includes(liquor)) {
            // remove from checkedTypes
            setCheckedTypes(checkedTypes?.filter(type => type !== liquor));
        } else {
            // add to checkedTypes
            setCheckedTypes(prev=>[...prev, liquor]);
        }
    };
    // When checkbox changed, reflect to state. Than pass result to searchByLiquor action to filter Redux.

    return (
        <FormGroup>
            <Box display="flex" flexWrap="wrap" justifyContent="center" align-items="center">
            {
                liquorTypes.map((liquor,index) => {
                    // I wanted to put onChange to parent's of Checkbox...
                    return <FormControlLabel 
                            control={
                                <Checkbox
                                    checked={checkedTypes.includes(liquor) ? true : false}
                                    onChange={handleChange}
                                    value={liquor}
                                    name={liquor}
                                    color="primary"
                                />
                            }
                        label={liquor}
                        key={index}
                    />
                })
            }
            </Box>
        </FormGroup>   
    )
}

export default FilterButton;
