import {makeStyles} from '@material-ui/core/styles';

export const navbarStyle = makeStyles({
    navbar: {
        background: '#F2E18D',
        padding: '2rem',
        marginBottom: '2rem'
    },
    navTitle: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '3rem',
        margin: '0 1rem'
    },
    navItems: {
        color: '#000',
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