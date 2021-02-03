// function for filtering cocktails that have all liquorChips.
// compare two array of strings(ingredients) & liquorChips (Chips) and get all including cocktail object.
const filterByLiquors = (cocktails, liquorChips) => { 
  return cocktails.filter((cocktail)=>{
    let containAll = true;
    for (let i=0; i < liquorChips.length; i++){
        if (!cocktail.ingredients.some(ingredient => ingredient.toLowerCase().includes(liquorChips[i].toLowerCase().trim()))) {
            containAll = false;
        }
    }
    return containAll
  })
}

const filterLiquorHelper = (cocktails, text, liquorChips) => {
  let filterResult = [];
//   cocktails = array[{},{}].  liquorChips=[types of liquor checked(strings)]
  // When no filter and search
  if (liquorChips.length === 0 && !text) {
    filterResult = [...cocktails];
  }

// find cocktails only liquor chip filter active.
  if (liquorChips.length > 0 && !text) {    
    filterResult = filterByLiquors(cocktails, liquorChips);
  }

// when only text filter is active. Not really a good search tho.
  if (liquorChips.length === 0 && text) {
    cocktails.forEach((cocktail)=>{
        if (cocktail.name.toLowerCase().includes(text.toLowerCase())){
            filterResult.push(cocktail)
        }
    })
  }

//   if liquor filter and search filter both are active.
  if (liquorChips.length > 0 && text) {
    let textFiltered = []
    cocktails.forEach((cocktail)=>{
        if (cocktail.name.toLowerCase().includes(text.toLowerCase())){
            textFiltered.push(cocktail)
        }
    })
    filterResult = filterByLiquors(textFiltered, liquorChips);
  }

  return filterResult;
};

export default filterLiquorHelper;
