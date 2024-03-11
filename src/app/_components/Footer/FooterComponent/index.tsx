'use client'

import React from 'react'


import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import LogoIcon from "../../../../../public/piku.svg"

import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'
import FooterForm from './FooterForm'
import FooterMenu from './FooterMenu'

const FooterComponent = ({ footer }: { footer: Footer }) => {

  const pathname = usePathname()

  const navItems = footer?.navItems || []
  return (
    <footer
      className={
        noHeaderFooterUrls.includes(pathname)
          ?
          classes.hide
          :
          ''
      }
    >
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.wrapper}>

            <div className={classes.blockList}>
              <div className={classes.newsletters}>
                <div className={classes.newslettersBlock}>
                  <LogoIcon />
                  <FooterForm />
                </div>
              </div>
              <div className={classes.menu}>
                <FooterMenu />
              </div>
              <div className={classes.menu}>
                block 3
              </div>
              <div className={classes.text}>
                <Gutter>
                  block4
                </Gutter>
              </div>
            </div>
            <div className={classes.aside}>
              <Gutter>
                <div className={classes.wrap}>
                  <Link
                    href='/'
                  >
                    <Image
                      src='/logo-white.svg'
                      alt='logo'
                      width={170}
                      height={50}
                    />
                  </Link>
                  <p>{footer.copyright}</p>
                  <div className={classes.socialLinks}>
                    {navItems.map(item => {
                      const icon = item?.link?.icon as Media;

                      return (
                        <Button
                          key={item.link.label}
                          el='link'
                          href={item.link.url}
                          newTab={true}
                          className={classes.socialLinkItem}

                        >
                          <Image
                            src={icon?.url}
                            alt={item.link.label}
                            width={24}
                            height={24}
                            className={classes.socialIcon}
                          />
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </Gutter>
            </div>


          </div>

        </div>

      </div>
    </footer>
  )
}

export default FooterComponent