import React from 'react'
import styles from '../../../styles/software/Title.module.css'

function Title({title,subtitle}) {
    return (
        <div className={styles['title-main']}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title
