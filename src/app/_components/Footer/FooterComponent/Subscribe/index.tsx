import React, { useState } from 'react'

import SubscribeIcon from 'public/admin ui/footer/subscribe/subscribe.svg'

import classes from './index.module.scss'

interface MyComponentProps {
    content: string;
  }

const Subscribe: React.FC<MyComponentProps> = ({ content }) => {


    const [emailValue, setEmailValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };
    const handleSubmitSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            console.log('Subscribe POST request')
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <div className={classes.subscribe}>
            <div className={classes.title}>
                <p>{content}</p>
            </div>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmitSubscribe} className={classes.form}>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={handleChange}
                            placeholder="Enter your e-mail for subscribe"
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