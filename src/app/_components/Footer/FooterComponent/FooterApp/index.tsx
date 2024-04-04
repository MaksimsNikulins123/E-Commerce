import React from 'react'

import classes from './index.module.scss'

import { Button } from '../../../Button'
import Image from 'next/image'
import Link from 'next/link'


const FooterApp = () => {

    return (
        <div className={classes.footerAppContainer}>
            <Link
                href='/mobile'
                >
                    <Image 
                        src='/admin ui/footer/app/craft-stapler-tool.svg'
                        alt='craft logo'
                        width={72}
                        height={72}
                    />
            </Link>
            <Button
                type='button'
                el='link'
                href='/mobile'
                label='Download the Mersy App'
                appearance='primary'
            />
        </div>
    )
}

export default FooterApp