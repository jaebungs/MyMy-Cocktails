import React from 'react';
import { Dialog, DialogTitle, DialogContentText, Button, Typography  } from '@material-ui/core';
import {recipeModalStyles} from './recipeModalStyles';


const RecipeModal = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {
    const classes = recipeModalStyles();

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
                <Button size="medium" variant="contained" color="secondary" onClick={handleClose}>Close</Button>
            </div>
        </Dialog>
    )
}

export default RecipeModal;