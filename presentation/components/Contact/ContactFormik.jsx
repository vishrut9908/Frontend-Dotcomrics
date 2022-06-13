import React, { useContext, useRef, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import styles from '../../../styles/contact/ContactFormik.module.css'
import { ContactContext } from "../../../application/contexts/ContactAction";
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const initialValues = {    
  email: "",
  name: "",
  brand: "",
  website: "",
  reference: "",
  captcha: "",
  message:""
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  name: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  captcha: Yup.string().required('Required'),
})

function ContactFormik() {
    const [formValues, setFormValues] = useState(initialValues);
    const context = useContext(ContactContext);
    // const [load, setLoad] = useState(false);
    // const form = useRef(null);
    
    const handleSubmit = (values,submitProps) => {
        submitProps.setSubmitting(false);
        submitProps.resetForm();
        console.log(values);
        context.ContactAction(values);
    };

  return (
    <div className={styles['contact-form-inner']}>
    <div className={styles['wrapper-contact-form-inner']}>
            <Formik
              initialValues={formValues || initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
             >
            {formik => {
                console.log('Formik props', formik)
            return (
            <Form>
            <h2>Send us a message</h2>
                <Field className={styles['input-contact']} type="text" name="name" id="name" placeholder='Enter your name'></Field>
                <ErrorMessage name='name' component={TextError} />
                <Field className={styles['input-contact']}  type="email" name="email" id="email" placeholder='Enter your email'></Field>
                <ErrorMessage name='email' component={TextError} />
                <Field className={styles['input-contact']}  type="website" name="website" id="website" placeholder='Enter your website (optional)'></Field>
                <Field className={styles['input-contact']}  type="brand" name="brand" id="brand" placeholder='Enter your brand (optional)'></Field>
                <Field className={styles['input-contact']}  type="reference" name="reference" id="reference" placeholder='Where did you here about us (optional)'></Field>
                <Field className={styles['input-contact']} name="message" id="message" placeholder='Enter your message' component="textarea"></Field>
                <ErrorMessage name='message' component={TextError} />
              <ReCAPTCHA
                sitekey={TEST_SITE_KEY}
                onChange={
                  value => {
                      formik.setFieldValue("captcha",value);
                  }
                }
              />
                <ErrorMessage name='captcha' component={TextError} />
              <button
                className={styles['btn-contact']}
                id="submitButtonLogin"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
              </Form>)
            }}
            </Formik>
                </div>
    </div>
  );
}


export default ContactFormik