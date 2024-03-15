import React, { useState } from 'react'

import SubscribeIcon from 'public/admin ui/footer/subscribe/subscribe.svg'

import classes from './index.module.scss'

const Subscribe = ({ content }) => {

    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubscribe = () => {

    }


    return (
        <div className={classes.subscribe}>
            <div className={classes.title}>
                <p>{content}</p>
            </div>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubscribe} className={classes.form}>
                        <input
                            type="email"
                            value={value}
                            onChange={handleChange}
                            placeholder="Enter your e-mail"
                            className={classes.input}
                        />
                        <button className={classes.button}>
                            <SubscribeIcon />
                        </button>
                        
                </form>
            </div>
        </div>
    )
}

export default Subscribe