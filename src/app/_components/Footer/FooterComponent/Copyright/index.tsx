import React from 'react'

import classes from './index.module.scss'

const Copyright = ({ copyright }) => {
    return (
        <div className={classes.copyright}>
            <span>{copyright}</span>
        </div>

    )
}

export default Copyright