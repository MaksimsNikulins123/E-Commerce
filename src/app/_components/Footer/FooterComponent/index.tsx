'use client'

import React, { useEffect, useState } from 'react'

import { Gutter } from '../../Gutter'

import { Footer } from '../../../../payload/payload-types'


import Subscribe from './Subscribe'
import Greenfinity from './Greenfinity'
import NavigationFooter from './NavigationFooter'



import FooterApp from './FooterApp'


import classes from './index.module.scss'
import SocialMedia from './Socials'
import BurgerMenu from '../../BurgerMenu'
import LocationSettings from './LocationSettings'
import Copyright from './Copyright'
import AdditionalLinks from './AdditionalLinks'


const FooterComponent = ({ footer }: { footer: Footer }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400); // Adjust breakpoint as needed
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <footer className={classes.footer}>
      <Gutter>
        <Subscribe content={footer.subscribe} />
        <Greenfinity content={footer.greenfinity} />
        <div className={classes.extraLinks}>
          <FooterApp />
          {
            isMobile
              ?
              <BurgerMenu
                shopNavItems={footer.shopNavItems}
                sellNavItems={footer.sellNavItems}
                aboutNavItems={footer.aboutNavItems}
                helpNavItems={footer.helpNavItems}
              />
              :
              <NavigationFooter
                shopNavItems={footer.shopNavItems}
                sellNavItems={footer.sellNavItems}
                aboutNavItems={footer.aboutNavItems}
                helpNavItems={footer.helpNavItems}
              />
          }
          <SocialMedia socialMedia={footer.socialMedia} />
        </div>

        <div className={classes.footerBottom}>
          <div className={classes.footerBottomContainer}>
            <LocationSettings locationSettings={footer.locationSettings}/>
            <Copyright copyright={footer.copyright} />
            <AdditionalLinks additionalLinks={footer.additionalLinks}/>
          </div>
        </div>
      </Gutter>
    </footer>
  )
}

export default FooterComponent