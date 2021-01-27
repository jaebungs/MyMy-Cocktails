const filterByLiquor = (cocktails, text, filterLiquors) => {
  let filterResult = [];
//   cocktails = array[{},{}].  filterLiquors=[types of liquor checked(strings)]
  // When no filter and search
  if (filterLiquors.length === 0 && !text) {
    filterResult = [...cocktails];
  }

  if (filterLiquors.length > 0 && !text) {
    // find cocktails that use selected liquor
    // I know it is so hard to read.  cocktail = object, ingredients = array
    cocktails.forEach((cocktail) => {
      cocktail.ingredients.forEach((ingredient) => {
        filterLiquors.forEach((liquor) => {
          if (ingredient.toLowerCase().includes(liquor)) {
            filterResult.push(cocktail);
          }
        });
      });
    });
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
//   if (filterLiquors.length > 0 && text) {
//     let textFiltered = []
//     cocktails.forEach((cocktail)=>{
//         if (cocktail.name.toLowerCase().includes(text.toLowerCase())){
//             textFiltered.push(cocktail)
//         }
//     })
//     textFiltered.forEach((cocktail) => {
//         cocktail.ingredients.forEach((ingredient) => {
//           filterLiquors.forEach((liquor) => {
//             if (ingredient.toLowerCase().includes(liquor)) {
//               filterResult.push(cocktail);
//             }
//           });
//         });
//       });
//   }

  return filterResult;
};

export default filterByLiquor;
