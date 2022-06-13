import React, { useContext } from 'react'
import { PrivacyContext } from '../../../application/contexts/PrivacyAction';
import styles from '../../../styles/privacy/Desc.module.css'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Description() {
    const context = useContext(PrivacyContext);
    console.log(context.TermState);
    return (
        <div className={styles['desc-page']}>
            <div className={styles['wrapper-desc-2']}>
            <ReactMarkDown skipHtml={true} children={context.TermState?.data?.attributes?.policy} remarkPlugins={[remarkGfm]}></ReactMarkDown>
            </div>
        </div>
    )
}

export default Description
