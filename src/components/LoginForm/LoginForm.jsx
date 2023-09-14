import { Caption, ButtonContainer, SupportingText } from "components/Form/Form.styled";
import { InputWraper } from "components/Form/Input.styled";
import { Button } from "components/Styled";
// import { useNavigate } from "react-router-dom";
import { FormFields, LoginFormStyled } from "./LoginForm.styled";
import Message from "components/Message/Message";
import ShowPassword from "components/ShowPassword/ShowPassword";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useStore from '../../zustand/store';

export const LoginForm = ({setIsLoginModalOpened}) => {
  const { error, logIn } = useStore();
  // const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { email: "", password: "" };

  const schema = yup.object().shape({
    email: yup.string().min(3).max(254).required(),
    password: yup.string().min(8).max(100).required(),
  });


  const handleSubmit = (values, { resetForm }) => {
    logIn(values);
    setIsLoginModalOpened(false);
    // navigate("/teachers");
    resetForm();
  };

  const onClickHandler = () => {
    setPasswordShown((state) => !state);
  };

  const message = error;

  return (
      <LoginFormStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <Caption>Login</Caption>
            <SupportingText>
            Welcome back!
          </SupportingText>
            <FormFields>
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
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder=" "
                />
                <label htmlFor="password">Password *</label>
                <ErrorMessage
                  className="error"
                  component="div"
                  name="password"
                />
              </InputWraper>
            </FormFields>
            <ButtonContainer>
              <Button type="submit">
                Log In
              </Button>

            </ButtonContainer>
          </Form>
        </Formik>
        {message && <Message>{message}</Message>}
      </LoginFormStyled>
  );
};
