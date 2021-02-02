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
    marginBottom: '2rem',
  },
  shakeTitle: {
    fontSize: '2rem',
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
  textfield: {
      margin: '1rem',
      padding: '0.5rem',
      width: '330px',
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7AE653',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4FC68',
    },
  },
  shakeButton: {
    background: '#C4FC68',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#7AE653',
    },
  },
});
