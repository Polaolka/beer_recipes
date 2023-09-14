import { FormFields, RegisterFormStyled } from './RegisterForm.styled';
import {
  Caption,
  ButtonContainer,
  SupportingText,
} from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { useState } from 'react';
import useStore from '../../zustand/store';
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordPattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const RegisterForm = ({ setIsRegModalOpened }) => {
  const { error, register } = useStore();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    register(values);
    setIsRegModalOpened(false);
    resetForm();
  };

  const schema = yup.object().shape({
    username: yup.string().min(3).max(254).required(),
    email: yup.string().min(4).max(50).required().matches(emailPattern, "Incorrect email format. The email must be in format test@gmail.com"),
    password: yup.string().min(7).max(7).required().matches(passwordPattern, "The password must include at least 6 consecutive alphabetic characters (either uppercase `A-Z` or lowercase `a-z`) and one digit."),
  });

  const message = error;

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Registration</Caption>
          <SupportingText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </SupportingText>
          <FormFields>
            <InputWraper>
              <Field type="text" name="username" placeholder=" " />
              <label htmlFor="username">Name *</label>
              <ErrorMessage className="error" component="div" name="username" />
            </InputWraper>

            <InputWraper>
              <Field type="text" name="email" placeholder=" " />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <Field
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password *</label>
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Sign Up
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
    </RegisterFormStyled>
  );
};
