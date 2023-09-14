import { useState } from 'react';
import {
  HeaderStyled,
  HeaderContainer,
  RectStyled,
  TitleStyled,
  LogInBtn,
  RegistrationBtn,
  LogInIcon,
  LogOutIcon,
  HelloStyled,
  AuthWrapper,
} from './Header.styled';

import { Logo } from 'components/Logo/Logo';
import useStore from '../../zustand/store';
import Modal from 'components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Button } from 'components/Styled';


const Header = () => {
const {isAuth, login, logOut} = useStore();
const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
const [isRegModalOpened, setIsRegModalOpened] = useState(false);

const openLoginModal = () => {
  setIsLoginModalOpened(true);
};
const openRegisterModal = () => {
  setIsRegModalOpened(true);
};
const logOuthandle = () => {
  logOut();
};

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <TitleStyled>Unlock the Flavorscape!</TitleStyled>
          {!isAuth ? (
                    <AuthWrapper>
                      <LogInBtn type="button" onClick={openLoginModal}>
                        <LogInIcon />
                        Log in
                      </LogInBtn>
                      <Button
                      className='regBtn'
                        type="button"
                        onClick={openRegisterModal}
                      >
                        Registration
                      </Button>
                    </AuthWrapper>
                  ) : (
                    <AuthWrapper>
                      <HelloStyled>Hello, {login}!</HelloStyled>
                      <LogInBtn type="button" onClick={logOuthandle}>
                        <LogOutIcon />
                        Log out
                      </LogInBtn>
                    </AuthWrapper>
                  )}
        </HeaderContainer>
          <RectStyled/>
      </HeaderStyled>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
    </>
  );
};

export default Header;
