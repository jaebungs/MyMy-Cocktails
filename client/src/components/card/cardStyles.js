import {red} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';

export const cardStyles = makeStyles({
  card: {
    background: '#fff',
    padding: '10px',
  },
  cardTitle: {
    fontWeight: 'bold',
    userSelect: 'text'
  },
  chipsContainer: {
    margin: '0.4rem 0'
  },
  chip: {
    margin: '3px 5px 0 0'
  },
});
