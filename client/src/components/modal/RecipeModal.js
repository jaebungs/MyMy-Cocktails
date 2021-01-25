import React from 'react';
import { Dialog, DialogTitle, DialogContentText, Button  } from '@material-ui/core';


const RecipeModal = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {

    const handleClose = () => {
        setOpenRecipe(null);
    }

    return (
        <Dialog open={!!name} fullWidth={true} maxWidth="sm">
            <DialogTitle>{name}</DialogTitle>
            <DialogContentText>
                <p><strong>Ingredients :</strong></p>
                <ul>
                    {ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })}
                </ul>
                <p><strong>Instructions :</strong></p>
                <ol>
                    {instruction.map((step)=>{
                        return <li>{step}</li>
                    })}
                </ol>
                <p><strong>Garnish :</strong></p>
                <p>{garnish}</p>
            </DialogContentText>
            <Button size="medium" variant="contained" color="secondary" onClick={handleClose}>Close</Button>
        </Dialog>
    )
}

export default RecipeModal;