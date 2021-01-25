import React from 'react';
import { Dialog, DialogTitle, DialogContentText, Button, Typography  } from '@material-ui/core';


const RecipeModal = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {

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
        <Dialog open={!!name} fullWidth={true} maxWidth="sm">
            <DialogTitle>{name}</DialogTitle>
                <Typography variant="h5">Ingredients :</Typography>
                <ul>
                    {ingredients.map((ingredient, index) => {
                        return <li key={index} >{changeFirstCharToUpper(ingredient)}</li>
                    })}
                </ul>
                <Typography variant="h5">Instructions :</Typography>
                <ol>
                    {instruction.map((step, index)=>{
                        return <li key={index}>{step}</li>
                    })}
                </ol>
                <Typography variant="h5">Garnish :</Typography>
                <p>{garnish}</p>
            <Button size="medium" variant="contained" color="secondary" onClick={handleClose}>Close</Button>
        </Dialog>
    )
}

export default RecipeModal;