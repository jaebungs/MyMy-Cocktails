import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToMyBar, removeFromMyBar } from '../../actions/myBar';
import { Box, Dialog, DialogTitle, DialogContentText, Button, Typography  } from '@material-ui/core';
import {recipeModalStyles} from './recipeModalStyles';


const RecipeModal = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {
    const classes = recipeModalStyles();
    const location = useLocation();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState();
    const id = JSON.parse(localStorage?.getItem('user'))?.result?._id;

    useEffect(()=>{
        setCurrentPage(location.pathname)
    }, [location])

    const handleClose = () => {
        setOpenRecipe(null);
    }
    const changeFirstCharToUpper = (sentence) => {
        let words = sentence.toLowerCase().split(' ');
        let newSentence = [];
        words.forEach((word) => {
            let newWord = word.charAt(0).toUpperCase() + word.slice(1);
            newSentence.push(newWord);
        })
        
        return newSentence.join(' ').trim();
    }

    const handleAddtoMyBar = () => {
        dispatch(addToMyBar({_id, name, ingredients, instruction, garnish, setOpenRecipe}, id));
        setOpenRecipe(null);
    }

    const handleRemoveFromMyBar = () => {
        dispatch(removeFromMyBar({_id}))
        setOpenRecipe(null);
    }

    return (
        <Dialog open={!!name} fullWidth={true} maxWidth="sm" >
            <div className={classes.modalContainer}>
                <DialogTitle disableTypography className={classes.modalTitle}>{name}</DialogTitle>
                    <Typography variant="h6">Ingredients :</Typography>
                    <ul>
                        {ingredients.map((ingredient, index) => {
                            return <li key={index} >{changeFirstCharToUpper(ingredient)}</li>
                        })}
                    </ul>
                    <Typography variant="h6">Instructions :</Typography>
                    <ol>
                        {instruction.map((step, index)=>{
                            return <li key={index}>{step}</li>
                        })}
                    </ol>   
                    <Typography variant="h6">Garnish :</Typography>
                    <p>{garnish}</p>
                <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" width="100%" >
                    <Box mr={2}>
                        {currentPage === '/' && <Button size="medium" variant="contained" color="primary" onClick={handleAddtoMyBar}>Add</Button>}
                        {currentPage === '/mybar' && <Button size="medium" variant="contained" color="secondary" onClick={handleRemoveFromMyBar}>Remove</Button>}
                    </Box>
                    
                    <Button size="medium" variant="contained" onClick={handleClose}>Close</Button>
                </Box>
            </div>
        </Dialog>
    )
}

export default RecipeModal;