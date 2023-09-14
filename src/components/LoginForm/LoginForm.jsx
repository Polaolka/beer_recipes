import { Caption, ButtonContainer, SupportingText } from "components/Form/Form.styled";
import { InputWraper } from "components/Form/Input.styled";
import { Button } from "components/Styled";
// import { useNavigate } from "react-router-dom";
import { FormFields, LoginFormStyled } from "./LoginForm.styled";
import ShowPassword from "components/ShowPassword/ShowPassword";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useStore from '../../zustand/store';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordPattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const LoginForm = ({setIsLoginModalOpened}) => {
  const { logIn } = useStore();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { email: "", password: "" };

  const schema = yup.object().shape({
    email: yup.string().min(4).max(50).required().matches(emailPattern, "Incorrect email format. The email must be in format test@gmail.com"),
    password: yup.string().min(7).max(7).required().matches(passwordPattern, "The password must include at least 6 consecutive alphabetic characters (either uppercase `A-Z` or lowercase `a-z`) and one digit."),
  });


  const handleSubmit = (values, { resetForm }) => {
    logIn(values);
    setIsLoginModalOpened(false);
    resetForm();
  };
  
  const onClickHandler = () => {
    setPasswordShown((state) => !state);
  };

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
      </LoginFormStyled>
  );
};
