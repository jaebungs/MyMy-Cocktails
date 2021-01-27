import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { liquorTypes } from '../../actions/cocktails';
import { searchHomeByName, searchHomeByLiquor, searchMyByName, searchMYByLiquor } from '../../actions/filters';
import { Box, FormGroup, FormControlLabel, Checkbox, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const FilterInputs = () => {
    
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

    // Handle checked liquor filters.
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
    
    // hanlde text typed in the search box
    const handleTextChange = (e) => {
        const text = e.target.value;
        if(pathname === '/') {
            dispatch(searchHomeByName(text))
        } else if (pathname==='/mybar') {
            dispatch(searchMyByName(text))
        }
    }

    return (
        <FormGroup>
             
            <Box display="flex" flexWrap="wrap" justifyContent="center" align-items="center">
            {
                liquorTypes.map((liquor,index) => {
                    return <FormControlLabel 
                            control={
                                <Checkbox
                                    // I wanted to put onChange to parent's of Checkbox...
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
            <Input
                id="serach"
                variant="outlined"
                onChange={handleTextChange}
                startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                }
            />
            </Box>
        </FormGroup>   
    )
}

export default FilterInputs;
