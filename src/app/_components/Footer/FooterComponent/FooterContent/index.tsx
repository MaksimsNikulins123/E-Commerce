import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'

const FooterContent = ({ title, content }) => {
    return (
            <div className={classes.footerMenu}>
                <p>{title}</p>
                <ul>
                    {content.map(({ id, title, url }) => {
                        return (
                            <li key={id.toString()}>
                                <Link
                                    href={url}
                                >
                                    {title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
}

export default FooterContent