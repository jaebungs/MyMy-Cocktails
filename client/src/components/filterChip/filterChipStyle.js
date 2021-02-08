import {makeStyles} from '@material-ui/core/styles';

export const filterChipStyle = makeStyles({

    chip: {
        margin: '6px 6px 0 0'
    },
    checked: {
        backgroundColor: '#E8E8E8',
        margin: '6px 6px 0 0'
    },
    clear: {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        margin: '6px 6px 0 0',
        '&:hover': {
            backgroundColor : '#EC4C4C'
        }
    },
    '@media (max-width: 1024px)': {
        clear: {
            '&:hover': {
                backgroundColor : 'transparent'
            }
        }
    }
});
