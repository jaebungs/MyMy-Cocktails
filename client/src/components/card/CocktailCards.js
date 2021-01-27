import React, {useEffect, useState} from 'react'
import { Grid ,Card, CardActionArea, CardContent, CardActions, Button , Typography  } from '@material-ui/core';
import { liquorTypes } from '../../actions/cocktails';
import LiquorChip from './LiquorChip';

const CocktailCards = ({_id, name, ingredients, instruction, garnish, setOpenRecipe }) => {
    
    // const [liquorChips, setLiquorChips] = useState({});

    // useEffect(()=>{
    //     createLiquorChips(ingredients)
    // }, [])

    const handleModal = () => {
        setOpenRecipe({_id, name, ingredients, instruction, garnish})
    }

    const createLiquorChips = (ingredients) => {
        let chips = [];
        
        // check what ingredietns are listed to create chips.
        ingredients.forEach((ingredient) => {
            liquorTypes.forEach((liquor)=>{
                if(ingredient.toLowerCase().includes(liquor.toLowerCase())) {
                    // used object to omit duplicates.
                    // setLiquorChips(prev=>{
                    //     return {...prev, [liquor]:liquor}
                    // })
                    chips.push(liquor)
                }
            })
        })
        return chips
    }

    return (
        <Grid item xs={12} sm={4} md={3}>
            <CardActionArea onClick={handleModal}>
                <Card variant="outlined" >
                    <CardContent>
                        <Typography variant="h5">{name}</Typography>
                    </CardContent>
                    {
                        createLiquorChips(ingredients).map((liquor, index) => {
                            return <LiquorChip key={index} liquor={liquor} />
                        })
                    }
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default CocktailCards;
