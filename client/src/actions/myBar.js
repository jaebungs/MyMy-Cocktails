export const getAllFromMyBar = (cocktails) => ({
    type: 'GET_ALL_FROM_MY_BAR',
    cocktails
})

export const addToMyBar = (cocktail, id) => async (dispatch) => {
    const token = JSON.parse(localStorage?.getItem('user'))?.token;
    const combineObject = {
        ...cocktail,
        id
    }
    await fetch('https://cocktail-api-x8zo.onrender.com/mybar', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
          },
        body: JSON.stringify(combineObject)
    })
    .then((res)=>res.json())
    .then((data)=> {
        const newData = data._doc;
        dispatch({type: 'ADD_TO_MY_BAR', newData});
    })
    .catch(err => {
        console.log(err)
    })
}

export const removeFromMyBar = (_id, id) => async (dispatch) => {
    const token = JSON.parse(localStorage?.getItem('user'))?.token;
    const combineObject = {
        _id,
        id
    };

    await fetch('https://cocktail-api-x8zo.onrender.com/mybar', {
        method: 'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
          },
        body: JSON.stringify(combineObject)
    })
    .then((res)=>res.json())
    .then((data)=> {
        const newData = data._doc;
        dispatch({type: 'REMOVE_FROM_MY_BAR', newData});
    })
    .catch(err => console.log(err))
}

export const rateCocktail = (id) => ({
    type: 'RATE_COCKTAIL',
    id
})