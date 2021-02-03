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
  },
  shakeImage: {
    position: 'relative',
    bottom: '30px'
  },
  shakeTitle: {
    fontSize: '2rem',
    margin: '0',
    fontWeight: '800',
  },
  shakeSubTitle: {
    fontSize: '1rem',
    fontWeight: '300',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
