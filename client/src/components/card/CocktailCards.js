import React from 'react'
import { Grid ,Card, CardActionArea, CardContent, CardActions, Button , Typography  } from '@material-ui/core';

const CocktailCards = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {

    const handleModal = () => {
        setOpenRecipe({_id, name, ingredients, instruction, garnish})
    }

    return (
        <Grid item xs={12} sm={4} md={3}>
            <CardActionArea onClick={handleModal}>
                <Card variant="outlined" >
                    <CardContent>
                        <Typography variant="h5">{name}</Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default CocktailCards;
