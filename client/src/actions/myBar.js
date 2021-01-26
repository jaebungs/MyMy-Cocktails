export const getAllMyCocktails = () => ({
    type: 'GET_ALL_MY_COCKTAILS'
})

export const removeFromMyCocktails = () => ({
    type: 'REMOVE_FROM_MY_COCKTAILS'
})

export const rateCocktail = (id) => ({
    type: 'RATE_COCKTAIL',
    id
})