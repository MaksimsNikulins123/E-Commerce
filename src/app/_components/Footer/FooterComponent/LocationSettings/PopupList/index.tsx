import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const PopupList = ({ closePopupWindow, locationSettings, buttonValue, handleButtonValue }) => {

    const [selectedCountryFlag, setSelectedCountryFlag] = useState(buttonValue.icon)
    const [selectedCountry, setSelectedCountry] = useState(buttonValue.country)
    const [selectedLanguage, setSelectedLanguage] = useState(buttonValue.language)
    const [selectedCurrency, setSelectedCurrency] = useState(buttonValue.currency)

    const [allCountriesList, setAllCountriesList] = useState([])
    const [allLanguagiesList, setAllLanguagiesList] = useState([])
    const [allCurrenciesList, setAllCurrenciesList] = useState([])



    const handleChangeCountry = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry)
        getCountriesList(selectedCountry)
        getLanguagesList(selectedCountry, selectedLanguage)
        getCountryFlagIcon(selectedCountry)

    };
    const handleChangeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        setSelectedLanguage(selectedLanguage)
        getLanguagesList(selectedCountry, selectedLanguage)
    };
    const handleChangeCurrency = (event) => {
        const selectedCurrency = event.target.value;
        setSelectedCurrency(selectedCurrency)
        getCurrenciesList(selectedCountry, selectedCurrency)
    };

    const handleSubmitForm = () => {
        handleButtonValue({
            icon: selectedCountryFlag,
            country: selectedCountry,
            language: selectedLanguage,
            currency: selectedCurrency
        })
        closePopupWindow()
    }
    useEffect(() => {
    }, [selectedCountry, selectedLanguage, selectedCurrency, allCountriesList, allLanguagiesList, allCurrenciesList]);

    const getCountriesList = (selectedCountry) => {
        const resultOfAllCountries = []
        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            if (!element.settings.country.includes(selectedCountry)) {
                resultOfAllCountries.push(element.settings.country)
            }
        }
        setAllCountriesList(resultOfAllCountries)
    }
    const getLanguagesList = (selectedCountry, selectedLanguage) => {
        const resultOfAllLanguages = []
        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            if (element.settings.country === selectedCountry) {
                element.settings.languages.forEach((item) => {
                    resultOfAllLanguages.push(item.language)
                })
            }
        }

        if (resultOfAllLanguages.includes(selectedLanguage)) {
            const updatedResultOfAllLanguages = resultOfAllLanguages.filter(item => item !== selectedLanguage);
            setAllLanguagiesList(updatedResultOfAllLanguages)
        } else {
            setSelectedLanguage(resultOfAllLanguages[0])
            const updatedResultOfAllLanguages = resultOfAllLanguages.filter(item => item !== resultOfAllLanguages[0]);
            setAllLanguagiesList(updatedResultOfAllLanguages)

        }

    }
    const getCurrenciesList = (selectedCountry, selectedCurrency) => {
        const resultOfAllCurrencies = []
        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            if (element.settings.country === selectedCountry) {
                element.settings.currencies.forEach((item) => {
                    resultOfAllCurrencies.push(item.currency)
                })
            }
        }
        if (resultOfAllCurrencies.includes(selectedCurrency)) {
            const updatedResultOfAllCurrencies = resultOfAllCurrencies.filter(item => item !== selectedCurrency);
            setAllCurrenciesList(updatedResultOfAllCurrencies)
        } else {
            setSelectedCurrency(resultOfAllCurrencies[0])
            const updatedResultOfAllCurrencies = resultOfAllCurrencies.filter(item => item !== resultOfAllCurrencies[0]);
            setAllCurrenciesList(updatedResultOfAllCurrencies)
        }

    }
    const getCountryFlagIcon = (selectedCountry) => {
        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            if (element.settings.country.includes(selectedCountry)) {
                setSelectedCountryFlag(element.settings.icon)
            }
        }
    }

    useEffect(() => {
        getCountriesList(selectedCountry)
        getLanguagesList(selectedCountry, selectedLanguage)
        getCurrenciesList(selectedCountry, selectedCurrency)
        getCountryFlagIcon(selectedCountry)
    }, []);

    return (
        <div
            className={classes.popupOverlay}
            onClick={closePopupWindow}>
            <div
                className={classes.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.popupHeader}>
                    <h2>Update your settings</h2>
                </div>
                <form>
                    <p>
                        Set where you live, what language you speak and the currency you use.
                        <a href='/'>Learn more.</a>
                    </p>
                    <div>
                        <div>
                            <label>Region</label>
                        </div>
                        <div>
                            <select onChange={handleChangeCountry}>
                                <optgroup label="Selected country">

                                    <option
                                        key={selectedCountry}
                                        value={selectedCountry}>
                                        {selectedCountry}
                                    </option>
                                </optgroup>
                                <optgroup label="Choose your country">

                                    {allCountriesList.map((country) => (
                                        <option
                                            key={country}
                                            value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Language</label>
                        </div>
                        <div>
                            <select onChange={handleChangeLanguage}>
                                <optgroup label="Selected language">
                                    <option
                                        key={selectedLanguage}
                                        value={selectedLanguage}>
                                        {selectedLanguage}
                                    </option>
                                </optgroup>
                                <optgroup label="Available languages">
                                    {allLanguagiesList.map((language) => (
                                        <option
                                            key={language}
                                            value={language}>
                                            {language}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Currency</label>
                        </div>
                        <div>
                            <select
                                onChange={handleChangeCurrency}
                            >
                                <optgroup label="Selected currency">
                                    <option
                                        key={selectedCurrency}
                                        value={selectedCurrency}>
                                        {selectedCurrency}
                                    </option>
                                </optgroup>
                                <optgroup label="Available currencies">
                                    {allCurrenciesList.map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type='button' onClick={handleSubmitForm}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PopupList