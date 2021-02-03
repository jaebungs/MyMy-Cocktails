import {makeStyles} from '@material-ui/core/styles';

export const searchStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textfield: {
    margin: '0',
    width: '220px',
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7AE653',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4FC68',
    },
  },
  dropdownContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    border: 'none',
    width: '220px',
    padding: '0',
    margin: '0',
    overflow: 'auto'
  },
  dropdownList: {
    backgroundColor: '#fff',
    border: 'none',
    borderTopWidth: '0',
    listStyle: 'none',
    marginTop: '0',
    maxHeight: '143px',
    '&:hover': {
      backgroundColor: '#C4FC68',
      cursor: 'pointer',
      fontWeight: '700',
    },
  },
  active: {
    backgroundColor: '#C4FC68',
    fontWeight: '700',
    padding: '0.5rem'
  },
  li: {
    padding: '0.5rem',
    display: 'block',
  }
});
