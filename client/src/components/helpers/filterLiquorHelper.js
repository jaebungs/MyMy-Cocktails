// function for filtering cocktails that have all filterLiquors.
const filterByLiquors = (cocktails, filterLiquors) => { 
  return cocktails.filter((cocktail)=>{
    let containAll = true;
    for (let i=0; i < filterLiquors.length; i++){
        if (!cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(filterLiquors[i]))) {
            containAll = false;
        }
    }
    return containAll
  })
}


const filterLiquorHelper = (cocktails, text, filterLiquors) => {
  let filterResult = [];
//   cocktails = array[{},{}].  filterLiquors=[types of liquor checked(strings)]
  // When no filter and search
  if (filterLiquors.length === 0 && !text) {
    filterResult = [...cocktails];
  }

// find cocktails that use selected liquor
  if (filterLiquors.length > 0 && !text) {    
    filterResult = filterByLiquors(cocktails, filterLiquors);
  }

// if only search filter is active. Not really a good search tho.
  if (filterLiquors.length === 0 && text) {
    cocktails.forEach((cocktail)=>{
        if (cocktail.name.toLowerCase().includes(text.toLowerCase())){
            filterResult.push(cocktail)
        }
    })
  }

//   if liquor filter and search filter both are active.
  if (filterLiquors.length > 0 && text) {
    let textFiltered = []
    cocktails.forEach((cocktail)=>{
        if (cocktail.name.toLowerCase().includes(text.toLowerCase())){
            textFiltered.push(cocktail)
        }
    })
    filterResult = filterByLiquors(textFiltered, filterLiquors);
  }

  return filterResult;
};

export default filterLiquorHelper;
