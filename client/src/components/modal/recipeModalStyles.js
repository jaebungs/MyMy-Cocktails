import {makeStyles} from '@material-ui/core/styles';

export const recipeModalStyles = makeStyles({

    dialogContentContainer: {
        border: "4px solid #000",
        padding: '2rem'
    },
    modalTitle: {
        borderBottom: '3px solid #000',
        fontSize: '1.7rem',
        fontWeight: 'bold',
        padding: '0',
        marginTop: '0',
        marginBottom: '2rem'
    },
    subtitle: {
        background: "#000",
        borderRadius: "22px",
        color: '#fff',
        fontSize: '0.8rem',
        padding: '4px 16px'
    },
    contentsContainer: {
        marginTop: '0.6rem',
        marginBottom: '1.5rem'
    },
    shakeAgainButton: {
        backgroundColor: '#C4FC68',
        fontWeight: '500',
        '&:hover': {
            backgroundColor: '#7AE653',
        }
    },
    addButton: {
        margin: '0.9rem',
        fontWeight: '500',
        backgroundColor: '#C4FC68',
        '&:hover': {
            backgroundColor: '#7AE653'
        }
    },
    '@media (max-width: 1024px)': {
        shakeAgainButton: {
            '&:hover': {
                backgroundColor: '#C4FC68',
            }
        },
        addButton: {
            '&:hover': {
                backgroundColor: '#C4FC68'
            }
        }
    }
    

});
