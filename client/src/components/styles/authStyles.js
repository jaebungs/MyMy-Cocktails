import {makeStyles} from '@material-ui/core/styles';

export const authStyles = makeStyles({
    authPageContainer: {
        marginTop: '2%'
    },
    paperContainer: {
        padding: '1rem 2rem 2rem 2rem'
    },
    avatar: {
        backgroundColor: '#3f51b5'
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
        margin: '0.5rem auto'
    },
    googleSignButton: {
        border: '2px solid #3f51b5',
        backgroundColor: '#fff'
    },
    switchButton: {
        border: '2px solid #000',
        backgroundColor: '#fff'
    }
});