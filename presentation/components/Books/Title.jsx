import React from 'react'
import styles from '../../../styles/services/Title.module.css'
const Title = () => {
    return (
        <div className={`${styles['title']} ${styles['book-title']}`}>
            <h1>Books For Selling On Amazon</h1>
        </div>
    )
}

export default Title
