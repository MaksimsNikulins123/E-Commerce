'use client'

import React from 'react'

// import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import Link from 'next/link'

import { Gutter } from '../../Gutter'
// import { Button } from '../../Button'
// import FooterForm from './FooterForm'
// import FooterContent from './FooterContent'
// import FooterText from './FooterText'

// import { footerImpactMessage, footerMenu, footerProducts, noHeaderFooterUrls } from '../../../constants'

import { Footer, Media } from '../../../../payload/payload-types'

// import LogoIcon from "../../../../../public/piku.svg"

// import classes from './index.module.scss'
import Subscribe from './Subscribe'

const FooterComponent = ({ footer }: { footer: Footer }) => {

 
  // const pathname = usePathname()
  // const navItems = footer?.navItems || []
  return (
    // <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
    <footer>
      <Gutter>
        <Subscribe content={footer.subscribe}/>
        <div>100% renewable electricity block</div>
        <div>
          <div>Nvigation block</div>
          <div>App download block</div>
        </div>
        <div>
            <div>Location settings block</div>
            <div>
              <span>Copyright block</span>
              <div>Links block</div>
            </div>
        </div>
        {/* <div className={classes.footer}>
          <div className={classes.container}>
            <div className={classes.wrapper}>
              <div className={classes.blockList}>
                <div className={classes.newsletters}>
                  <LogoIcon />
                  <FooterForm />
                </div>
                <div className={classes.menu}>
                  <FooterContent title="MENU" content={footerMenu} />
                </div>
                <div className={classes.menu}>
                  <FooterContent title="PRODUCTS" content={footerProducts} />
                </div>
                <div className={classes.text}>
                  <FooterText  title="About" content={footer.impactMessage} />
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
        </div> */}
      </Gutter>
    </footer>
  )
}

export default FooterComponent