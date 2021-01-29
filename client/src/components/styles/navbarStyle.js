import {makeStyles} from '@material-ui/core/styles';

export const navbarStyle = makeStyles({
    navbar: {
        background: '#F2E18D',
        padding: '2rem 6rem',
        marginBottom: '1rem',
        "@media (max-width: 1300px)": {
            padding: '2rem 0'
        }
    },
    navTitle: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '2.4rem',
        margin: '0 1rem',
        "@media (max-width: 350px)": {
            margin: '0 auto',
            textAlign: 'center'
        }
    },
    navItems: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '1.4rem',
        margin: '0 1rem',
        "@media (max-width: 430px)": {
            margin: '1rem auto 0 auto',
            textAlign: 'center'
        }
    },
    navLinkContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        "@media (max-width: 500px)": {
            display: 'flex',
            marginBottom: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexGrow: 0
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
    }
});