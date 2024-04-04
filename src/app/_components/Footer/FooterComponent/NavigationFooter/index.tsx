import React from 'react'
import { CMSLink } from '../../../Link'


import classes from './index.module.scss'

const NavigationFooter = ({ shopNavItems, sellNavItems, aboutNavItems, helpNavItems }) => {

  return (
    <nav className={classes.nav}>
      <div className={classes.navContainer}>
        <div className={classes.navWrapper}>
          <div className={classes.navItem}>
            <h3>Shop</h3>
            <div className={classes.extraLinks}>
              <ul>
                {shopNavItems.map(({ link }, i) => {
                  return <li key={i}><CMSLink  {...link} appearance="none" /></li>
                })}
              </ul>
            </div>
          </div>
          <div className={classes.navItem}>
            <h3>Sell</h3>
            <div className={classes.extraLinks}>
              <ul>
                {sellNavItems.map(({ link }, i) => {
                  return <li key={i}><CMSLink  {...link} appearance="none" /></li>
                })}
              </ul>
            </div>
          </div>
          <div className={classes.navItem}>
            <h3>About</h3>
            <div className={classes.extraLinks}>
              <ul>
                {aboutNavItems.map(({ link }, i) => {
                  return <li key={i}><CMSLink  {...link} appearance="none" /></li>
                })}
              </ul>
            </div>
          </div>
          <div className={classes.navItem}>
            <h3>Help</h3>
            <div className={classes.extraLinks}>
              <ul>
                {helpNavItems.map(({ link }, i) => {
                  return <li key={link.toString()}><CMSLink key={i} {...link} appearance="none" /></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationFooter