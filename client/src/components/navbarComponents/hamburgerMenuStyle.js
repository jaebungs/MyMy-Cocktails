import {makeStyles} from '@material-ui/core/styles';

export const hamburgerMenuStyle = makeStyles({
  hamburgerMenuContainer: {
    display: 'none',
  },
  navItems: {
    display: 'none',
  },
  '@media (max-width: 600px)': {
    collapseContainer: {
      width: '100%',
      position: 'absolute',
      top: '70px',
      zIndex: '10',
    },
    dummyBackground: {
      width: '100%',
      height: '100vh',
      backgroundColor: 'transparent'
    },
    hamburgerMenuContainer: {
      backgroundColor: '#fafafa',
      margin: '0',
      width: '100%',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navItems: {
      display: 'block',
      backgroundColor: '#fff',
      border: '2px solid #fff',
      textDecoration: 'none',
      color: '#000',
      fontSize: '1.4rem',
      margin: '0.2rem',
      padding: '0.8rem 5rem',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: '#fff',
      boxSizing:'border-box',

        border: '2px solid #000',
      },
    },
  },
});
