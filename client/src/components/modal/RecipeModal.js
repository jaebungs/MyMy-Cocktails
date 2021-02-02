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
        dispatch(removeFromMyBar(_id, id));
        setOpenRecipe(null);
    }

    return (
        <Dialog open={!!name} fullWidth={true} maxWidth="xs" >
            <div className={classes.dialogContentContainer}>
                <DialogTitle disabletypography="true" variant="h1" className={classes.modalTitle}>{name}</DialogTitle>
                    <Typography disabletypography="true" variant="caption" className={classes.subtitle}>INGREDIENTS</Typography>
                    <ul className={classes.contentsContainer}>
                        {ingredients.map((ingredient, index) => {
                            return <li key={index} >{changeFirstCharToUpper(ingredient)}</li>
                        })}
                    </ul>
                    <Typography disabletypography="true" variant="caption" className={classes.subtitle}>STEPS</Typography>
                    <ol className={classes.contentsContainer}>
                        {instruction.map((step, index)=>{
                            return <li key={index}>{step}</li>
                        })}
                    </ol>
                    
                    { garnish !== '' && <Typography disabletypography="true" variant="caption" className={classes.subtitle}>GARNISH</Typography> }
                    <ol className={classes.contentsContainer}>{garnish}</ol>
                <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" width="100%" mt={7}>
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