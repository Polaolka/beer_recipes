import { ModalStyled } from './ModalError.styled';
import { IoMdClose } from 'react-icons/io';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import useStore from 'zustand/store';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ active = false, setActive, children }) => {
  const { resetError } = useStore();
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  useEffect(() => {
    if (active) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [active]);

  const closeModal = () => {
    setActive(false);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      setActive(false);
      resetError();
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={!active ? 'is-hidden' : ''}
    >
      <div className="modal">
        <div className="inner">
          <button type="button" className="close" onClick={closeModal} >
              <IoMdClose size={28}/>
          </button>
          {children}
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
