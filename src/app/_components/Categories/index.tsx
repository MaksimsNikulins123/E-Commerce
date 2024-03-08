import React from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
const Categories = () => {
  return (
    <section className={classes.container}>
        <div className={classes.titleWrapper}>
            <h3>Collections</h3>
            <Link
                href='/collections'
            >
                View all
            </Link>
        </div>
    </section>
  )
}

export default Categories