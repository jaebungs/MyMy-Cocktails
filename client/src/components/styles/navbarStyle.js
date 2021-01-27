import {makeStyles} from '@material-ui/core/styles';

export const navbarStyle = makeStyles({
    navbar: {
        background: '#6d4c41',
        padding: '2rem'
    },
    navTitle: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '3rem',
        margin: '0 1rem'
    },
    navItems: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5rem',
        margin: '0 1rem'
    },
    navLinkContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        "@media(max-wdith: 500px)": {
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    loginContainer: {
        margin: '0 2rem'
    },
    
});