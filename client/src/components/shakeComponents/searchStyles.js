import {makeStyles} from '@material-ui/core/styles';

export const searchStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textfield: {
    margin: '1rem 0 0 0',
    width: '330px',
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7AE653',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4FC68',
    },
  },
  dropdownContainer: {
    border: 'none',
    width: '330px',
    padding: '0',
    margin: '0',
  },
  dropdownList: {
    backgroundColor: '#fff',
    border: 'none',
    borderTopWidth: '0',
    listStyle: 'none',
    marginTop: '0',
    maxHeight: '143px',
    overflowY: 'auto',
    padding: '0.3rem 0.5rem 0.5rem 0.5rem',
    '&:hover': {
      backgroundColor: '#C4FC68',
      cursor: 'pointer',
      fontWeight: '700',
    },
  },
  active: {
    backgroundColor: '#C4FC68',
    fontWeight: '700',

  }
});
