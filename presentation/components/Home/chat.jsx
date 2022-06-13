import React, { useContext, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik'
import {Oval} from 'react-loader-spinner'
import * as Yup from 'yup'
import TextError from '../Contact/TextError'
import styles from '../../../styles/contact/quick.module.css'
import { ContactContext } from "../../../application/contexts/ContactAction";




const initialValues = {    
  email: "",
  name: "",
  phone: "",
  message:""
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  name: Yup.string().required('Required'),
  phone: Yup.string().matches(phoneRegExp, {
    message: "Invalid number",
    excludeEmptyString: false,
  }),
  message: Yup.string().required('Required'),
})

function ChatFormik({setOpen}) {
    const [formValues, setFormValues] = useState(initialValues);
    const context = useContext(ContactContext);
    
    const handleSubmit = async(values,submitProps) => {
        submitProps.setSubmitting(false);
        submitProps.resetForm();
        console.log(values);
        await context.QuickAction(values);
        setOpen(prev=>!prev);
    };

  return (
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
                <Field className={styles['input-contact']} type="text" name="name" id="name" placeholder='Name'></Field>
                <ErrorMessage name='name' component={TextError} />
                <Field className={styles['input-contact']}  type="email" name="email" id="email" placeholder='Email'></Field>
                <ErrorMessage name='email' component={TextError} />
                <Field className={styles['input-contact']}  type="phone" name="phone" id="phone" placeholder='Phone'></Field>
                <ErrorMessage name='phone' component={TextError} />
                <Field className={styles['input-contact']} name="message" id="message" placeholder='Message' component="textarea"></Field>
                <ErrorMessage name='message' component={TextError} />
              <button
                className={styles['btn-contact']}
                id="submitButtonLogin"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {
                  context.ContactState.isLoading?
                  <Oval height="1rem" width="1rem" color="white" ></Oval>
                  :"Submit"
                }
                {/* Submit */}
              </button>
              </Form>)
            }}
            </Formik>
  );
}


export default ChatFormik;