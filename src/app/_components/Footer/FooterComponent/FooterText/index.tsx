import React from 'react'

import classes from './index.module.scss'


const FooterText = ({ title, content}) => {
// const FooterText = ({ footerText}) => {
    return (
        <div className={classes.footerTextContainer}>
            <p>{title}</p>
            {/* <p>{footerText.title}</p> */}
            <div className={classes.footerTextWrapper}>
                {/* {content.map(({ id, content }) => {
                    return (
                        <p key={id.toString()}>
                            {content}
                        </p>
                    )
                })} */}
                <p>{content}</p>
            </div>
        </div>
    )
}

export default FooterText