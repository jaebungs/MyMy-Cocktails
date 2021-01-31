import React from 'react'
import { Chip  } from '@material-ui/core';
import { chipStyle } from '../styles/chipColor';
import { cardStyles } from './cardStyles';

const LiquorChip = ({liquor}) => {

    const classes = chipStyle();
    const chip = cardStyles();

    const upperCaseLiquor = liquor.charAt(0).toUpperCase() + liquor.slice(1); // first latter Cap

    return (
        <Chip className={[ classes[liquor.replace(/\s/g, '')], chip.chip ].join(' ')} variant="outlined" size="small" label={upperCaseLiquor} />
    )
}

export default LiquorChip;