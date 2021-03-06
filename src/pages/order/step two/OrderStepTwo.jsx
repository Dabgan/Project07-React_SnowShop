import React from 'react';
import { useFormik } from 'formik';
import ShoppingPath from '../ShoppingPath';
import { StyledForm, FormData, FormTitle, BtnContainer } from './stepTwoStyles';
import OrderInput from './OrderInput';
import { withRouter, useHistory, Link } from 'react-router-dom';

const initialValues = {
    name: '',
    lastName: 'Test',
    number: 420777777,
    email: 'shop@snowshop.pl',
    address: 'Test adress',
    addressComplement: '6/37',
    zip: '21-370',
    city: 'Testtown',
    state: 'Testylvania',
    comments: 'no comments needed :)',
};

const validate = (values) => {
    let errors = {};

    const validateRequired = (name) => {
        if (!values[name]) {
            return (errors[name] = `This field is required`);
        }
        switch (name) {
            case `email`:
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email format';
                }
                break;
            case `number`:
                if (!/(^|\W)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/.test(values[name])) {
                    errors[name] = 'Invalid phone number';
                }
                break;
            default:
                break;
        }
    };
    // set every input excluding 'comments' to required
    for (const name in values) {
        if (name !== 'comments') {
            validateRequired(name);
        }
    }
    return errors;
};

const OrderStepTwo = () => {
    let history = useHistory();

    // onsubmit go to step3 page and pass all the inputs values
    const onSubmit = (values) => {
        history.push('/order/step3', { ...values });
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <>
            <ShoppingPath active={2} activeLink={'n + 3'} />
            <StyledForm onSubmit={formik.handleSubmit}>
                <FormData>
                    <FormTitle>Your Data</FormTitle>
                    <OrderInput name="name" formik={formik} />
                    <OrderInput name="lastName" formik={formik} title="last name" />
                    <OrderInput name="number" type="tel" formik={formik} title={`Phone number`} />
                    <OrderInput name="email" type="email" formik={formik} />
                </FormData>
                <FormData>
                    <FormTitle>Address</FormTitle>
                    <OrderInput name="address" formik={formik} />
                    <OrderInput name="addressComplement" formik={formik} title={`Address complement`} />
                    <OrderInput name="zip" formik={formik} title={`ZIP / Postal Code`} />
                    <OrderInput name="city" formik={formik} />
                    <OrderInput name="state" formik={formik} />
                </FormData>
                <FormData>
                    <FormTitle>Additional info</FormTitle>
                    <OrderInput name="comments" formik={formik} />
                </FormData>
                <BtnContainer>
                    <Link to="/order/step1" type="button" className="my-btn">
                        Go Back
                    </Link>

                    <button type="submit" className="my-btn">
                        Submit
                    </button>
                </BtnContainer>
            </StyledForm>
        </>
    );
};

export default React.memo(withRouter(OrderStepTwo));
