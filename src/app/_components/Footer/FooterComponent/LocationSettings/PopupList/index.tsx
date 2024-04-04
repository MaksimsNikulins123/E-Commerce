import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const PopupList = ({ closePopupWindow, locationSettings, buttonValue, setButtonValue }) => {

    const [selectedCountryFlag, setSelectedCountryFlag] = useState(buttonValue.icon)
    const [selectedCountry, setSelectedCountry] = useState(buttonValue.country)
    const [selectedLanguage, setSelectedLanguage] = useState(buttonValue.language)
    const [selectedCurrency, setSelectedCurrency] = useState(buttonValue.currency)
    const [selectedCountryLanguages, setSelectedCountryLanguages] = useState(buttonValue.languages)
    const [defaultLanguage, setDefaultLanguage] = useState(buttonValue.language)

    
    const [countries, setCountries] = useState([])
    const [languages, setLanguages] = useState([])


    const [countriesOfSelectedLanguage, setcountriesOfSelectedLanguage] = useState([])
    const [countriesOfEnglishLanguage, setcountriesOfEnglishLanguage] = useState([])

    // for (let index = 0; index < locationSettings.length; index++) {
    //     for (let index = 0; index < locationSettings[index].selectedLanguage[index].length; index++) {
    //         const element = array[index];

    //     }
    //     const element = locationSettings[index].selectedLanguage;

    // }



    const handleChangeCountry = (event) => {
        // const selectedCountry = event.target.value;
        // setSelectedCountry(selectedCountryPrev => selectedCountryPrev = selectedCountry)

        // const selectedCountryFlag = locationSettings.find(option => option.linkForLocationSettings.country === selectedCountry).linkForLocationSettings?.icon;
        // setSelectedCountryFlag(selectedCountryFlagPrev => selectedCountryFlagPrev = selectedCountryFlag)

        // const selectedCountrySettings = locationSettings.find(option => option.linkForLocationSettings.country === selectedCountry).linkForLocationSettings;
        // setSelectedCountryLanguages(selectedCountryLanguagesPrev => selectedCountryLanguagesPrev = selectedCountrySettings.languages)
        // setSelectedLanguage(selectedLanguagePrev => selectedLanguagePrev = selectedCountrySettings.languages[0].language)

        // setSelectedCurrency(selectedCurrencyPrev => selectedCurrencyPrev = selectedCountrySettings.currency)

    };
    const handleChangeLanguage = (event) => {
        // const selectedLanguage = event.target.value;
        // setSelectedLanguage(selectedLanguage)
    };
    const handleChangeCurrency = (event) => {
        // const selectedCurency = event.target.value;
        // setSelectedCurrency(selectedCurency)
    };

    useEffect(() => {
        console.log('component didUpdate')
        console.log(locationSettings)

        // setSelectedCountry(selectedCountry)

        // return () => {
        //     console.log('component unmount')
        //     setButtonValue({
        //         icon: selectedCountryFlag,
        //         country: selectedCountry,
        //         language: selectedLanguage,
        //         currency: selectedCurrency,
        //         languages: selectedCountryLanguages
        //     })

        // };
    }, [selectedCountry, selectedLanguage, selectedCurrency, selectedCountryLanguages, countries]);

    const getAllCountriesList = (selectedLanguage, englishLanguage, ) => {

        const resultOfSelectedLanguageCountries = []
        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            element.settings.languages.forEach((language) => {
                if(language.language.includes(selectedLanguage)) {
                    resultOfSelectedLanguageCountries.push(
                        {
                            id: index,
                            country: language.country,
                            language: selectedLanguage
                        })
                }
               
            })
        }

        const resultOfEnglishLanguageCountries = [];

        for (let index = 0; index < locationSettings.length; index++) {
            const element = locationSettings[index];
            element.settings.languages.forEach((language) => {
                if(language.language.includes(englishLanguage)) {
                    resultOfEnglishLanguageCountries.push(
                        {
                            id: index,
                            country: language.country,
                            language: englishLanguage
                        })
                }
               
            })
        }
        setcountriesOfSelectedLanguage(resultOfSelectedLanguageCountries)
        setcountriesOfEnglishLanguage(resultOfEnglishLanguageCountries)
        //  console.log(resultOfSelectedLanguageCountries)
        //  console.log(resultOfEnglishLanguageCountries)

    }

    useEffect(() => {
        console.log('component mount')

        const result = ["United States", "Latvia"]
        getAllCountriesList(selectedLanguage, 'English')
            // const resultOfSelectedLanguageCountries = [];
            // const resultOfEnglishLanguageCountries = [];

            // locationSettings.forEach(locations => {
            //     locations.settings.languages.forEach(countries => {
            //         if (countries.language === selectedLanguage ) {
            //             resultOfSelectedLanguageCountries.push(countries.country)   
            //         } 
        
            //     });
            // });
            // locationSettings.forEach(locations => {
            //     locations.settings.languages.forEach(countries => {
            //         if(countries.language === 'English') {
            //             resultOfEnglishLanguageCountries.push(countries.country)
            //         }
            //     });
            // });

            // // const combineResult = [...resultOfSelectedLanguageCountries, ...resultOfEnglishLanguageCountries ]
            // const combineResult = resultOfSelectedLanguageCountries.concat(resultOfEnglishLanguageCountries)
            setCountries(result);
            // console.log(combineResult)
        
        // setSelectedCountry(selectedCountry)

        return () => {
            console.log('component unmount')
            setButtonValue({
                icon: selectedCountryFlag,
                country: selectedCountry,
                language: selectedLanguage,
                currency: selectedCurrency,
                // languages: selectedCountryLanguages
            })

        };
    }, []);


    return (
        <div className={classes.popupOverlay} onClick={closePopupWindow}>
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
                            <select
                                defaultValue={selectedCountry}
                                onChange={handleChangeCountry}
                            >
                                {/* <option>

                                </option> */}
                                {countries.map((country) => (
                                    <option
                                        key={country}
                                        value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Language</label>
                        </div>
                        <div>
                            <select
                                defaultValue={defaultLanguage}
                                onChange={handleChangeLanguage}
                            >
                                <option>

                                </option>
                                {/* {selectedCountryLanguages.map((option) => (
                                    <option key={option.language} value={option.language}>
                                        {option.language}
                                    </option>
                                ))} */}
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
                                <option>

                                </option>
                                {/* <option key={selectedCurrency} value={selectedCurrency}>
                                    {selectedCurrency}
                                </option> */}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopupList