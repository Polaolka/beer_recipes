import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, SharedLayoutStyled } from './SharedLayout.styled';
import { Button } from '../../components/Styled/Button.styled';
import { BiUpArrow } from 'react-icons/bi';

const SharedLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SharedLayoutStyled>
      <Container>
        <Header />
        <Suspense >
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      {isVisible && (
        <Button type="button" className="icon totop" onClick={scrollToTop}>
          <BiUpArrow />
        </Button>
      )}
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
