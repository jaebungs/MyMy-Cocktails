export const storeAllCocktails =(cocktails) => ({
    type: 'STORE_ALL_COCKTAILS',
    cocktails
})

export const searchByName = (page, subject) => ({
    type: 'SEARCH_BY_NAME',
    page,
    subject
})

export const searchByLiquor = (page, ...subject) => ({
    type: 'SEARCH_BY_LIQUOR',
    page,
    subject
})