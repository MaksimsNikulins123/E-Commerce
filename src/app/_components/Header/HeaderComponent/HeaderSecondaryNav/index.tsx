import React from 'react'
import Link from 'next/link'

import { useAuth } from '../../../../_providers/Auth'
import LoginIcon from "../../../../../../public/admin ui/header/login.svg"
import LogoutIcon from "../../../../../../public/admin ui/header/logout.svg"
import CartIcon from "../../../../../../public/admin ui/header/cart.svg"
import { languages } from '../../../../constants'
import CustomDropdown from '../../../CustomDropdown';

import classes from './index.module.scss'




export const HeaderSecondaryNav = () => {

  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      
        <Link href="/faq">FAQ</Link>
        <Link href="/contacts">Contacts</Link>
        <CustomDropdown options={languages} />

        {user
          ?
          <Link href="/logout">
            <LogoutIcon
              className={classes.logoutIcon}
              width={22}
              height={22}
            />
          </Link>

          :

          <Link href="/login" >
            <LoginIcon
              className={classes.loginIcon}
              width={22}
              height={22}
            />
          </Link>

        }
        <CartIcon
          className={classes.cartIcon}
          width={22}
          height={22}
        />
    </nav>
  )
}

