import {makeStyles} from '@material-ui/core/styles';

export const authStyles = makeStyles({
    authPageContainer: {
        marginTop: '2%'
    },
    paperContainer: {
        padding: '1rem 2rem 2rem 2rem'
    },
    avatar: {
        backgroundColor: '#000'
    },
    title: {
        margin: '0 0.5rem'
    },
    inputContainer: {
        margin: '1rem 0'
    },
    nameContainer: {
        display: 'flex',
    },
    input: {
        width: '100%',
        margin: '0.4rem auto'
    },
    firstNameInput: {
        width: '96%',
        margin: '0 0.4rem 0 0'
    },
    lastNameInput: {
        width: '96%',
        margin: '0 0 0 0.4rem'
    },
    signButton: {
        border: '2px solid #000',
        margin: '0.5rem auto',
        color: '#000',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#C4FC68',
          }
    },
    googleSignButton: {
        border: '2px solid #000',
        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
            backgroundColor: '#C4FC68',
          }
        
    },
    switchButton: {
        border: '2px solid #000',
        backgroundColor: '#fff',
        
    }
});