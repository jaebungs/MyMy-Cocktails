import {useSelector} from 'react-redux';

const ingredient = () => {

  const cocktailsData = useSelector((state) => state.cocktails);

  let lowerCaseIngredients = [];
  for (let cocktail in cocktailsData) {
    cocktail.ingredients.forEach((ingredient) => {
      lowerCaseIngredients.push(...ingredient.toLowerCase().split(' '));
    });
  }

  return lowerCaseIngredients;
};

export default ingredient;