import React from 'react'

import GreenfinityIcon from '/public/admin ui/footer/greenfinity/greenfinity.svg'

import classes from './index.module.scss'

interface MyComponentProps {
    content: string;
  }

const Greenfinity: React.FC<MyComponentProps> = ({ content } ) => {

    return (
        <div className={classes.greenfinity}>
            <div className={classes.buttonContainer}>
                <button className={classes.button}>
                    <span><GreenfinityIcon /></span>
                    <p>{content}</p>
                </button>
            </div>
        </div>
    )
}

export default Greenfinity