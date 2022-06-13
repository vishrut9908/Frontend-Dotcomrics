import React, { useContext, useEffect } from 'react'
import { PrivacyContext } from '../application/contexts/PrivacyAction'
import Title from '../presentation/components/Blogs/Title'
import Header from '../presentation/components/Common/Header'
import Desc from '../presentation/components/Policy/Desc'

function PrivacyPolicy() {
    const context = useContext(PrivacyContext);

    useEffect(()=>{
        context.PrivacyAction();
    },[])

    return (
        <div>
            <Header isDark={false}></Header>
            <Title title='Privacy Policy'></Title>
            <Desc></Desc>
        </div>
    )
}

export default PrivacyPolicy
