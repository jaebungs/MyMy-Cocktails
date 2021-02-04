import {makeStyles} from '@material-ui/core/styles';

export const navbarStyle = makeStyles({
    navbar: {
        background: 'none',
        boxShadow: 'none',
        padding: '1rem 7rem 0.5rem 7rem',
        marginBottom: '1rem',
        "@media (max-width: 1024px)": {
            padding: '1rem 1rem 0 1rem'
        },
    },
   
    navTitle: {
        color: '#000',
        display: 'inline-block',
        fontSize: '2rem',
        marginRight: '1rem',
        "@media (max-width: 750px)": {
            fontSize: '1.5rem',
            margin: '0 0.3rem',
            textAlign: 'center'
        },
        "@media (max-width: 500px)": {
            width: '100%',
            margin: '0.5rem auto 2rem auto',
        }
    },
    
    navItems: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '1.2rem',
        margin: '1rem',
        "@media (max-width: 650px)": {
            margin: '1rem 0.4rem 0 0.4rem',
            fontSize: '0.9rem',
            textAlign: 'center'
        },
        

    },

    signButton: {
        backgroundColor: '#fff',
        border: '2px solid #000',
        "@media (max-width: 1024px)": {
            padding: '0.2rem 0.3rem',
            fontSize: '0.7rem',
            fontWeight: '600',

        },
        "@media (max-width: 780px)": {
            marginLeft: '0.3rem'
        }
    },
    "@media (max-width: 300px)": {

        loginContainer: {
            justifyContent:'center',

        }
    },
    "@media (max-width: 490px)": {

        navContainer: {
            justifyContent:'center',
            margin: '0 auto'
        },   
        loginContainer: {

                justifyContent:'center',
                position: 'absolute',
                top: '75px',
                right: '5px'
            
        },
    }
});