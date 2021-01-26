export const searchHomeByName = (text) => ({
    type: 'SEARCH_HOME_BY_NAME',
    text
})

export const searchHomeByLiquor = (liquors) => ({
    type: 'SEARCH_HOME_BY_LIQUOR',
    liquors: [...liquors]
})

export const searchMyByName = (text) => ({
    type: 'SEARCH_MY_BY_NAME',
    text
})

export const searchMYByLiquor = (liquors) => ({
    type: 'SEARCH_MY_BY_LIQUOR',
    liquors: [...liquors]
})