import {
  AuthWrapperModal,
  ReadMoreModalInfo,
} from './ReadMoreModal.styled';
import { Button } from 'components/Styled';
import Modal from 'components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const ReadMoreModal = ({ setIsInfoModalOpened }) => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isRegModalOpened, setIsRegModalOpened] = useState(false);
  const openLoginModal = () => {
    setIsLoginModalOpened(true);
    setIsInfoModalOpened(false);
  };
  const openRegisterModal = () => {
    setIsRegModalOpened(true);
    setIsInfoModalOpened(false);
  };

  return (
    <>
      <ReadMoreModalInfo>
        To read the information, please register or login.
      </ReadMoreModalInfo>

      <AuthWrapperModal>
        <Button className="regBtn" type="button" onClick={openLoginModal}>
          Log in
        </Button>
        <Button className="regBtn" type="button" onClick={openRegisterModal}>
          Registration
        </Button>
      </AuthWrapperModal>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
    </>
  );
};
