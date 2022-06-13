import React, { useContext } from 'react'
import { PrivacyContext } from '../../../application/contexts/PrivacyAction';
import styles from '../../../styles/privacy/Desc.module.css'
import ReactMarkDown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Desc() {
    const context = useContext(PrivacyContext);
    console.log(context.PrivacyState?.data?.attributes);
    return (
        <div className={styles['desc-page']}>
            <div className={styles['wrapper-desc']}>
            <h2>{context.PrivacyState?.data?.attributes?.title}</h2>
            <h3>{context.PrivacyState?.data?.attributes?.subtitle}</h3>
            <ReactMarkDown skipHtml={true} children={context.PrivacyState?.data?.attributes?.policy} remarkPlugins={[remarkGfm]}></ReactMarkDown>
            {/* <p>We can be reached via e-mail or you can reach us by telephone at 610-253-2673 for each visitor to our Web page, our Web server automatically recognizes the consumer’s domain name and e-mail address (where possible).</p>
            <p>We may collect the domain name and email address (where possible) of visitors to our Web page, the e-mail addresses of those who post messages to our bulletin board, the e-mail addresses of those who communicate with us via e-mail, the e-mail addresses of those who make postings to our chat areas, aggregate information on what pages consumers access or visit, information volunteered by the consumer, such as survey information and/or site registrations, payment information (e.g., credit card number and billing address).</p>
            <p>The information we collect is not shared with other organizations for commercial purposes, disclosed when legally required to do so, at the request of governmental authorities conducting an investigation, to verify or enforce compliance with the policies governing our Website and applicable laws or to protect against misuse or unauthorized use of our Website.</p>
            <p>With respect to cookies: We use cookies to store visitors preferences, record session information, such as items that consumers add to their shopping cart, record user-specific information on what pages users access or visit, ensure that visitors are not repeatedly sent the same banner ads.</p>
            <p>If you do not want to receive e-mail from us in the future, please let us know by sending us an e-mail , calling us at the above telephone number or writing to us at the above address.</p>
            <p>If you supply us with your postal address on-line you may receive periodic mailings from us with information on new products and services or upcoming events. If you do not wish to receive such mailings, please let us know by calling us at the number provided above, e-mailing us at the above address, and writing to us at the above address.</p>
            <p>Persons who supply us with their telephone numbers on-line may receive telephone contact from us with information regarding new products and services or upcoming events. If you do not wish to receive such telephone calls, please let us know by sending us an e-mail, calling us at the above telephone number, writing to us at the above address.</p>
            <p>With respect to Ad Servers: We do not partner with or have special relationships with any ad server companies. From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our privacy notice. If our information practices change at some time in the future we will post the policy changes to our Web site to notify you of these changes and provide you with the ability to opt out of these new uses. If you are concerned about how your information is used, you should check back at our Web site periodically.</p>
            <p>Customers may prevent their information from being used for purposes other than those for which it was originally collected by sending us an e-mail, calling us at the above telephone number, writing to us at the above address.</p>
            <p>Customers may prevent their information from being used for purposes other than those for which it was originally collected by sending us an e-mail, calling us at the above telephone number, writing to us at the above address.</p>
            <p>Consumers can access this information by sending us an e-mail.</p>
            <p>Upon request we offer visitors the ability to have inaccuracies corrected in contact information, financial information, and unique identifiers.</p>
            <p>Consumers can have this information corrected by sending us an e-mail, calling us at the above telephone number, writing to us at the above address.</p>
            <p>With respect to security: We have appropriate security measures in place in our physical facilities to protect against the loss, misuse or alteration of information that we have collected from you at our site.</p>
            <p>If you feel that this site is not following its stated information policy, you may contact us at the above addresses or phone number, The DMA’s Committee on Ethical Business Practices at mgoldberger@the-dma.org, state or local chapters of the Better Business Bureau, The Federal Trade Commission by phone at 202.FTC-HELP (202.382.4357) or electronically at http://www.ftc.gov/ftc/complaint.htm.</p> */}
            </div>
        </div>
    )
}

export default Desc
