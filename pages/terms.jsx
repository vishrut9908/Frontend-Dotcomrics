import React, { useContext, useEffect } from 'react'
import { PrivacyContext } from '../application/contexts/PrivacyAction';
import Header from '../presentation/components/Common/Header'
import Description from '../presentation/components/Policy/Description';
import Title from '../presentation/components/Blogs/Title'

function Terms() {
    const context = useContext(PrivacyContext);

    useEffect(()=>{
        context.TermAction();
    },[])
    return (
        <div>
        <Header isDark={false}></Header>
        <Title title='Terms'></Title>
        <Description></Description>
        </div>
    )
}

export default Terms
