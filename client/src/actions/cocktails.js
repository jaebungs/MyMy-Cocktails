export const storeAllCocktails =(cocktails) => ({
    type: 'STORE_ALL_COCKTAILS',
    cocktails
})

export const addToMyBar = (cocktail) => ({
    type: 'Add_TO_MY_BAR',
    cocktail
})

export const liquorTypes = ['whiskey', 'rum', 'brandy', 'cognac', 'sweet vermouth', 'dry vermouth', 'gin', 'vodka', 'tequila', 'mezcal',  'wine', 'beer', 'campari', 'luxardo']