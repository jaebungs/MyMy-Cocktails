import React from 'react'
import { Chip  } from '@material-ui/core';
import { chipStyle } from '../styles/chipColor';

const LiquorChip = ({liquor}) => {

    const classes = chipStyle();

    const upperCaseLiquor = liquor.charAt(0).toUpperCase() + liquor.slice(1); // first latter Cap

    return (
        <Chip className={classes[liquor.replace(/\s/g, '')]} size="medium" label={upperCaseLiquor} />
    )
}

export default LiquorChip;