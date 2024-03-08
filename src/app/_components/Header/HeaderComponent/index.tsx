'use client'

import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
// import Link from 'next/link'

import classes from './index.module.scss'
// import Image from 'next/image'
import { HeaderNav } from './Nav'
import { changeHeaderLinkColor, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { HeaderSecondaryNav }  from './HeaderSecondaryNav'
import Logo from './Logo'
import MovingBanner from './MovingBanner'


const HeaderComponent = ({ header }: { header: Header }) => {

    const pathname = usePathname();

    return (
        <>
            <Gutter className={classes.movingBanner}>
                <MovingBanner />
            </Gutter>

            <nav className={
            [
                classes.header,
                noHeaderFooterUrls.includes(pathname)
                &&
                classes.hide,
                changeHeaderLinkColor.includes(pathname)
                &&
                classes.changeLinkColor
            ]
                .filter(Boolean)
                .join(' ')}
            >
            
            <Gutter className={classes.wrap}>
                
                <HeaderNav header={header} />
                <Logo />
                <HeaderSecondaryNav />
            </Gutter>
            </nav>
        </>
    )
}

export default HeaderComponent