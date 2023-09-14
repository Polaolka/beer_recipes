import { MainContainer } from './App.styled';
import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Modal from 'components/Modal/Modal';
import useStore from '../../zustand/store';

const OneBeer = lazy(() => import('pages/OneBeer'));

const App = () => {
  const [isErrorModalOpened, setIsErrorModalOpened] = useState(false);
  const { error, getCurrentUser} = useStore();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  useEffect(() => {
    if (error) {
      setIsErrorModalOpened(true);
    }
  }, [error]);
  return (
    <>
      <MainContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="onebeer/:id" element={<OneBeer />} />
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </MainContainer>
      <Modal active={isErrorModalOpened} setActive={setIsErrorModalOpened}>
        <p>{error}</p>
      </Modal>
    </>
  );
};

export default App;
