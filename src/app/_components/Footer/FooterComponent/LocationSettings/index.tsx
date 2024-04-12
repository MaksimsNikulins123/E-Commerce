import React, { useState } from 'react'


import classes from './index.module.scss'
import Image from 'next/image'
import { Button } from '../../../Button'
import PopupList from './PopupList';
import { Media } from '../../../../../payload/payload-types';

const LocationSettings = ({ locationSettings }) => {

    const initialState = {
        icon: locationSettings[0].settings?.icon as Media,
        country: locationSettings[0].settings.country,
        language: locationSettings[0].settings.languages[0].language,
        currency: locationSettings[0].settings.currencies[0].currency,    
    }

    const [isOpen, setIsOpen] = useState(false);

    const [buttonValue, setButtonValue] = useState(initialState)
    
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {  
        setIsOpen(false); 
    };
    const handleButtonValue = (value) => {
        setButtonValue(value);
    };
   

    return (
        <div className=

            {[
                classes.popupContainer,
                isOpen === true && classes.open,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {
                isOpen
                    ?
                    <PopupList
                        closePopupWindow={closePopup}
                        locationSettings={locationSettings}
                        buttonValue={buttonValue}
                        handleButtonValue={handleButtonValue}
                    />
                    :
                    <>
                    </>
            }
            <Button
                onClick={openPopup}
                className={classes.popupButton}
            >
                <Image
                    src={buttonValue.icon.url}
                    alt='location logo'
                    width={20}
                    height={20}
                />
                <span>
                    <p>{buttonValue.country}</p>
                </span>
                <span>|</span>
                <span>
                    <p>{buttonValue.language}</p>
                </span>
                <span>|</span>
                <span>
                    <p>{buttonValue.currency}</p>
                </span>
            </Button>
        </div>
    );
}

export default LocationSettings