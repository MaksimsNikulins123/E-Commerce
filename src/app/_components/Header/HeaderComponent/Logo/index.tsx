import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoIcon from "../../../../../../public/piku.svg"

import classes from './index.module.scss'

const Logo = () => {
    return (
        <div className={classes.logo}>
            <Link
                href="/"
            >
                <LogoIcon
                    alt='logo'
                    width={140}
                    height={40}
                />
            </Link>

        </div>

    )
}

export default Logo