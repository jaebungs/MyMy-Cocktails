import {makeStyles} from '@material-ui/core/styles';

export const shakeStyles = makeStyles({
  shakeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '637px',
    height: '637px',
    border: '3px solid #000000',
    boxSizing: 'border-box',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    '@media (max-width: 1024px)': {
      width: '570px',
      height: '570px',
    },
    '@media (max-width: 600px)': {
      width: '500px',
      height: '500px',
    },
    '@media (max-width: 539px)': {
      width: '350px',
      height: '350px',
    }
  },
  shakeImage: {
    position: 'relative',
    bottom: '30px',
    width: '25rem',
    '@media (max-width: 1024px)': {
      width: '22rem'
    },
    '@media (max-width: 600px)': {
      width: '17rem'
    },
    '@media (max-width: 539px)': {
      width: '14rem'
    }
  },
  shakeTitle: {
    fontSize: '2rem',
    margin: '0',
    fontWeight: '800',
 
    '@media (max-width: 539px)': {
      fontSize: '1.3rem',
    }
  },
  shakeSubTitle: {
    fontSize: '1rem',
    fontWeight: '300',
    '@media (max-width: 539px)': {
      fontSize: '0.9rem',
      width: '80%',
      textAlign: 'center'
    }
  },
  searchContainer: {
    '@media (max-width: 539px)': {
      position: 'absolute',
      top: '480px'
    }
  },

  shakeButton: {
    background: '#C4FC68',
    borderRadius: '4px',
    padding: '0.4rem 0.8rem',
    margin: '0 0.5rem',
    maxHeight: '44px',
    '&:hover': {
      backgroundColor: '#7AE653',
    },
    '@media (max-width: 328px)': {
      padding: '0.2rem 0.5rem',
      fontSize: '0.8rem',
      position: 'relative',
      bottom: '110px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '@media (max-width: 290px)': {
      bottom: '125px'
    }
  }
});
