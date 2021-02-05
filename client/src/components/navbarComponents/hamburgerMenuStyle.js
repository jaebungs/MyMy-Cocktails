import {makeStyles} from '@material-ui/core/styles';

export const hamburgerMenuStyle = makeStyles({
    hamburgerMenuContainer: {
        display: 'none'
    },
    navItems: {
        display: 'none'
    },
    '@media (max-width: 600px)': {
        collapseContainer: {
            width: '100%',
            position: 'absolute',
            top: '70px',
            zIndex: '1'
        },
      hamburgerMenuContainer: {
        backgroundColor: '#fafafa',
        margin: '0',
        width: '100%',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      navItems: {
        display:'block',
        backgroundColor: '#fff',
        border: '2px solid #fff',
        textDecoration: 'none',
        color: '#000',
        fontSize: '1.4rem',
        margin: '0.2rem',
        padding: '0.8rem 3rem',
        '&:hover': {
          backgroundColor: '#fff',
          border: '2px solid #000',
        }
      }
    },

});
