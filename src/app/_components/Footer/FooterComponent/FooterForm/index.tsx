import React, { useState } from 'react'

import ArrowRightIcon from '../../../../../../public/admin ui/footer/form/arrow-right.svg'

import classes from './index.module.scss'

const FooterForm = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
      };
    
    const handleBlur = () => {
        inputValue ? setIsFocused(true) : setIsFocused(false)
        
      };

    return (
        <div className={classes.footerFormContainer}>
            <p>Sign up for new stories and personal offers</p>

            <form 
           
            className={classes.footerForm}>
                <input 
                className={classes.formInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange = {(e)=> setInputValue(e.target.value)} 
                type='email'
                autoComplete='e-mail'
                >
                
                </input>
                <label
                    className={isFocused ? classes.formLabelFocused : classes.formLabel}
                    placeholder=''
                >
                    E-Mail
                </label>
                <div className={classes.submitButton}> 
                    <button type="submit">
                        <ArrowRightIcon
                        className={classes.arrowRightIcon} 
                        width={5}
                        height={8}/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FooterForm