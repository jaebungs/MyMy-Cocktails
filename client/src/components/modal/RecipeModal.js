import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {searchByShakeInput} from '../../actions/filters';
import { addToMyBar, removeFromMyBar } from '../../actions/myBar';
import { Box, Dialog, DialogTitle, DialogContentText, Button, Typography  } from '@material-ui/core';
import {recipeModalStyles} from './recipeModalStyles';


const RecipeModal = ({_id, name, ingredients, instruction, garnish, setOpenRecipe, handleShowCocktail }) => {
    const classes = recipeModalStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const [currentPage, setCurrentPage] = useState();
    const id = JSON.parse(localStorage?.getItem('user'))?.result?._id;

    useEffect(()=>{
        setCurrentPage(location.pathname)
    }, [location])

    const handleClose = () => {
        setOpenRecipe(null);
        dispatch(searchByShakeInput(''));
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
                        {currentPage === '/' && <Button size="medium" variant="contained" className={classes.shakeAgainButton} onClick={handleShowCocktail}>SHAKE AGAIN</Button>}
                        {currentPage === '/library' && <Button size="medium" variant="contained" color="primary" disabled={!auth.result && !auth.token} onClick={handleAddtoMyBar}>ADD</Button>}
                        {currentPage === '/mybar' && <Button size="medium" variant="contained" color="secondary" onClick={handleRemoveFromMyBar}>REMOVE</Button>}
                    </Box>
                    
                    <Button size="medium" onClick={handleClose}>CLOSE</Button>
                </Box>
            </div>
        </Dialog>
    )
}

export default RecipeModal;