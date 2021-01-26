import React, {useEffect, useState} from 'react'
import { Grid ,Card, CardActionArea, CardContent, CardActions, Button , Typography  } from '@material-ui/core';
import { liquorTypes } from '../../actions/cocktails';
import LiquorChip from './LiquorChip';

const CocktailCards = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {
    
    const [liquorChips, setLiquorChips] = useState({});

    useEffect(()=>{
        createLiquorChips(ingredients)
    }, [])

    const handleModal = () => {
        setOpenRecipe({_id, name, ingredients, instruction, garnish})
    }

    const createLiquorChips = (ingredients) => {
        let lowerCaseIngredients = [];
        // Find used ingredients by spliting.
        ingredients.forEach((ingredient)=> lowerCaseIngredients.push(...ingredient.toLowerCase().split(' ')));
        
        // check what ingredietns are listed to create chips.
        liquorTypes.forEach((liquor)=>{
            if(lowerCaseIngredients.includes(liquor)) {
                // used object to omit duplicates.
                setLiquorChips(prev=>{
                    return {...prev, [liquor]:liquor}
                })
            }
        })
    }

    return (
        <Grid item xs={12} sm={4} md={3}>
            <CardActionArea onClick={handleModal}>
                <Card variant="outlined" >
                    <CardContent>
                        <Typography variant="h5">{name}</Typography>
                    </CardContent>
                    {
                        Object.keys(liquorChips).map((liquor, index) => {
                            return <LiquorChip key={index} liquor={liquor} />
                        })
                    }
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default CocktailCards;
