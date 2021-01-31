import {makeStyles} from '@material-ui/core/styles';

export const filterChipStyle = makeStyles({

    filterChip: {
        borderRadius: '15px',
        margin: '0 2px 4px 0',
        padding: '0 10px 0 0',
        maxHeight: '32px'
    },
    checked: {
        width: '32px',
        height: '32px',
        margin: '0 5px 0 5px',
        backgroundColor: '#FFE1B3'
    }
});
