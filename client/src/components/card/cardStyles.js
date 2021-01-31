import {red} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';

export const cardStyles = makeStyles({
  card: {
    background: '#fff',
    padding: '10px',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
    userSelect: 'text',
  },
  chip: {
    marginRight: '3px'
  },
});
