import {makeStyles} from '@material-ui/core/styles';

export const navbarStyle = makeStyles({
    navbar: {
        background: 'none',
        boxShadow: 'none',
        padding: '0.6rem 7rem',
        marginBottom: '1rem',
        "@media (max-width: 1300px)": {
            padding: '1rem 0'
        }
    },
    navTitle: {
        color: '#000',
        display: 'inline-block',
        fontSize: '2rem',
        "@media (max-width: 350px)": {
            margin: '0 auto',
            textAlign: 'center'
        }
    },
    navLinkContainer: {
        flexGrow: 1,
        marginTop: '1.2rem',
        padding: 0,
        "@media (max-width: 500px)": {
            display: 'flex',
            marginBottom: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexGrow: 0
        }
    },
    navItems: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '1.2rem',
        margin: '1rem',
        "@media (max-width: 430px)": {
            margin: '1rem auto 0 auto',
            textAlign: 'center'
        }
    },
    
    loginContainer: {
        margin: '0 2rem',
        "@media (max-width: 500px)": {
            margin: '1rem auto',
        }
    },
    margin: {
        margin: '0 1rem'
    },
    signButton: {
        backgroundColor: '#fff',
        border: '2px solid #000'
    }
});