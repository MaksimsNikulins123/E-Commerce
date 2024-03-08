import React, { useState } from 'react'
import Link from 'next/link'

import { useAuth } from '../../../../_providers/Auth'

// import { CartLink } from '../../../CartLink'

// import { ReactComponent as LoginSvg } from '../../../../../../public/admin ui/header/login2.svg'
// import ReactComponent  from "login2.svg"
import LoginIcon from "../../../../../../public/admin ui/header/login.svg"
import LogoutIcon from "../../../../../../public/admin ui/header/logout.svg"
import CartIcon from "../../../../../../public/admin ui/header/cart.svg"
import { languages } from '../../../../constants'
// import Dropdown from '../../../DropDawn';
import CustomDropdown from '../../../CustomDropdown';

import classes from './index.module.scss'
// import Image from 'next/image'


export const HeaderSecondaryNav = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // const handleChange = (selectedOption) => {
  //   setSelectedOption(selectedOption);
  // };

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
      {/* <Link href="/language"> */}
      <CustomDropdown options={languages} />
      {/* </Link> */}



      {user
        ?
        <Link
          href="/logout"
        >
          <LogoutIcon
            className={classes.logoutIcon}
            width={22}
            height={22}
          />
        </Link>

        :

        <Link
          href="/login"
        >
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

