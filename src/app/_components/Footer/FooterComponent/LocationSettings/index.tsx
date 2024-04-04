import React, { useEffect, useState } from 'react'


import classes from './index.module.scss'
import Image from 'next/image'
import { Button } from '../../../Button'
// import { languages } from './../../../../constants/index';
// import linkForLocationSettings from './../../../../../payload/fields/linkForLocationSettings';
// import { Media } from '../../../../../payload/payload-types';
import PopupList from './PopupList';
import { Media } from '../../../../../payload/payload-types';

const LocationSettings = ({ locationSettings }) => {

    // const initialState = locationSettings[0].linkForLocationSettings;
    const initialState = {
        icon: locationSettings[0].settings?.icon as Media,
        country: locationSettings[0].settings.languages[0].country,
        language: locationSettings[0].settings.languages[0].language,
        currency: locationSettings[0].settings.currency,
        // languages: locationSettings[0].settings.languages
    }

    const [isOpen, setIsOpen] = useState(false);

    const [buttonValue, setButtonValue] = useState(initialState)
    // const [buttonValue, setButtonValue] = useState({
        // icon: null && initialState?.icon as Media,
        // country: null && initialState.country,
        // language: null && initialState.languages[0].language,
        // currency: null && initialState.currency
    // })
    
    const openPopup = () => {
        setIsOpen(true);
        console.log(buttonValue)
    };

    const closePopup = () => {
        setIsOpen(false);
        console.log(buttonValue)
        // console.log(buttonValue)
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
                        setButtonValue={setButtonValue}
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
                    // src={icon.url}
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