import {makeStyles} from '@material-ui/core/styles';

export const profileStyles = makeStyles({
  profileContainer: {
    '@media (max-width: 750px)': {
      margin: '0',
      padding: '0',
    },
  },
  profileButton: {
    padding: '4px 3px',
    borderRadius: '35%',
  },
  avatar: {
    height: '32px',
    width: '32px',
    '@media (max-width: 750px)': {
      height: '25px',
      width: '25px',
    },
    '@media (max-width: 330px)': {
      height: '22px',
      width: '22px',
    },
  },
  accountPaper: {
    padding: '1rem',
  },
  accountName: {
    fontSize: '1.2rem',
    margin: '0.4rem 0.3rem',
  },
});
