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
    margin: 'auto'
  },
  shakeImage: {
    position: 'relative',
    bottom: '30px',
    width: '25rem'
  },
  shakeTitle: {
    fontSize: '2rem',
    marginBottom: '0.3rem',
    fontWeight: '800',
  },
  shakeSubTitle: {
    fontSize: '1rem',
    fontWeight: '300',
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
  },
  '@media (max-width: 1024px)': {

    shakeButton: {
      '&:hover': {
        backgroundColor: '#C4FC68',
      },
    }
  },
  '@media (max-width: 900px)': {
    shakeContainer: {
      width: '570px',
      height: '570px',
    }
  },
  '@media (max-width: 600px)': {

    shakeContainer: {
      width: '350px',
      height: '350px',
    },
    shakeImage: {
      width: '14rem',
      top:'0.4rem',
      marginBottom: '1rem',
    },
    shakeTitle: {
      fontSize: '1.3rem',
      textAlign: 'center',
      margin: '0.4rem 0'

    },
    shakeSubTitle: {
      fontSize: '0.9rem',
      width: '80%',
      textAlign: 'center',
      lineHeight: '1rem',
      marginTop: '0.1rem'
    },
    searchContainer: {
      position: 'relative',
      margin: '0 auto',
      top: '5.5rem',
    }
  },

});
