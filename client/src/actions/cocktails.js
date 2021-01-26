export const storeAllCocktails =(cocktails) => ({
    type: 'STORE_ALL_COCKTAILS',
    cocktails
})

export const addToMyBar = (cocktail) => ({
    type: 'Add_TO_MY_BAR',
    cocktail
})

export const liquorTypes = ['whiskey', 'vermouth', 'gin', 'vodka', 'rum', 'brandy'
, 'mezcal', 'tequila', 'wine', 'beer', 'cognac']