import {makeStyles} from '@material-ui/core/styles';

export const searchStyles = makeStyles({

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
    overflow: 'auto',
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
  },

  '@media (max-width: 500px)': {
    dropdownContainer: {
      width: '200px'
    },
    textfield: {
      width: '200px'
    }
  },

  '@media (max-width: 425px)': {
    container:{
      width: '150px'
    },
    dropdownContainer: {
      width: '150px'
    },
    textfield: {
      width: '150px'
    }
  },


});
