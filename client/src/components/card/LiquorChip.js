import React from 'react'
import { Chip  } from '@material-ui/core';

const LiquorChip = ({liquor}) => {
    return (
        <Chip size="medium" label={liquor} />
    )
}

export default LiquorChip;