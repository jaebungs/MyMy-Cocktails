import React from 'react'
import { Chip  } from '@material-ui/core';

const LiquorChip = ({liquor}) => {
    const upperCaseLiquor = liquor.charAt(0).toUpperCase() + liquor.slice(1);
    // require coloring by types later.
    
    return (
        <Chip size="medium" label={upperCaseLiquor} />
    )
}

export default LiquorChip;