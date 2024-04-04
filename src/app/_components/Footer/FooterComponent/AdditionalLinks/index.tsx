import React from 'react'

import classes from './index.module.scss'
import { CMSLink } from '../../../Link'

const AdditionalLinks = ({ additionalLinks }) => {
    return (
        <div className={classes.additionalLinks}>
            <ul>
                {additionalLinks.map(({ link }, i) => {
                    return <li key={i}><CMSLink  {...link} appearance="none" /></li>
                })}
            </ul>
        </div>
    )
}

export default AdditionalLinks