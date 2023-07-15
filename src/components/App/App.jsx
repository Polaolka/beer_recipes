import { MainContainer } from './App.styled';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import Home from 'pages/Home';

const OneBeer = lazy(() => import('pages/OneBeer'));

const App = () => {
  return (
    <>
      <MainContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="onebeer" element={<OneBeer />} />
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </MainContainer>
    </>
  );
};

export default App;
