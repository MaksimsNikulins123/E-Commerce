import React from 'react'

import { footerMenu } from '../../../../constants'

import classes from './index.module.scss'
import Link from 'next/link'

const FooterMenu = () => {
    return (
        <div className={classes.footerMenu}>
            <p>MENU</p>
                <ul>
                    {footerMenu.map(({ id, title, url }) => {
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

export default FooterMenu