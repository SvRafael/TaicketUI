import React from 'react'
import axios from 'axios'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'

const Login = () => {
    const handleSubmit = values => console.log(values)
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return(
        <>
        <h1>Login</h1>
        <p>Teste</p>
        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
            <Form className="Form">
                <div className="Form-Group">
                    <Field name="email" className="Form-Field"/>
                    <ErrorMessage name="email" component="span" className="Form-Error"></ErrorMessage>
                </div>
                <div className="Form-Group">
                    <Field name="password" className="Form-Field"/>
                    <ErrorMessage name="password" component="span" className="Form-Error"></ErrorMessage>
                </div>
                <button className="Form-Btn" type="submit">Login</button>
            </Form>
        </Formik>
    </>
    )
}

export default Login