import React, { useState } from 'react'

import classes from './index.module.scss'
import { CMSLink } from '../Link';
import { Media, Page } from '../../../payload/payload-types';


// type BurgerMenuProps = {
       
//     }

        
   
  

const BurgerMenu = ({ shopNavItems, sellNavItems, aboutNavItems, helpNavItems }) => {

    console.log(typeof({ shopNavItems, sellNavItems, aboutNavItems, helpNavItems }))
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${classes.burgerMenuContainer} ${isOpen ? classes.open : ''}`}>
            <div className={`${classes.burgerMenu} ${isOpen ? classes.open : ''}`} onClick={toggleMenu}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </div>
            <div className={`${classes.burgerMenuWrapper} ${isOpen ? classes.open : ''}`}>
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
    );
};

export default BurgerMenu