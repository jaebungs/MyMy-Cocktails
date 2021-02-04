import {makeStyles} from '@material-ui/core/styles';

export const recipeSearchInputStyle = makeStyles({
    recipeSearchInput: {
        width: '10rem',
        margin: '0 1rem',

        "@media (max-width: 780px)": {
            width: '8rem',
            margin: '0',
            padding:'0',
        },
        "@media (max-width: 550px)": {
            width: '5rem'
        },
        "@media (max-width: 330px)": {
            width: '4rem',
        }
    },
    searchIcon: {
        "@media (max-width: 780px)": {
            fontSize: '20px'
        },
        "@media (max-width: 400px)": {
            fontSize: '15px'
        }
    }
});
