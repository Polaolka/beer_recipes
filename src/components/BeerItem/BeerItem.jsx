import React, { useState } from 'react';
import {
  ImgStyled,
  ItemStyled,
  ReadMoreBtnStyled,
  RectStyled,
  AvaThumbStyled,
  NameStyled,
  InfoTextBeer,
  LinkStyled,
  InfoWrapperStyled,
  BoldText,
  SelectStyled,
  TrashStyled,
  InfoTextBeerDescr,
} from './BeerItem.styled';
import useStore from '../../zustand/store';
import { Scrollbars } from 'rc-scrollbars';

export const BeerItem = ({
  id,
  name,
  image_url,
  tagline,
  first_brewed,
  description,
}) => {
  const isAuth = useStore(state => state.isAuth);
  const selectedBeers = useStore(state => state.selectedBeers);
  const setSelectedBeers = useStore(state => state.setSelectedBeers);
  const saveToTeletedBeersOneBeer = useStore(
    state => state.saveToTeletedBeersOneBeer
  );
  const [selected, setSelected] = useState(false);
  const deleteOneBeer = useStore(state => state.setDeleteOneBeer);
  const handleImageError = e => {
    e.target.src =
      'https://res.cloudinary.com/dj5smkin6/image/upload/v1689277252/Screenshot_15_rfh3yi.jpg';
  };

  const handleBeerRightClick = e => {
    e.preventDefault();
    setSelected(!selected);
    const isBeerSelected = selectedBeers.includes(id);

    if (isBeerSelected) {
      const updatedSelectedBeer = selectedBeers.filter(
        recipeId => recipeId !== id
      );
      setSelectedBeers(updatedSelectedBeer);
    } else {
      const updatedSelectedBeer = [...selectedBeers, id];
      setSelectedBeers(updatedSelectedBeer);
    }
  };

  const handleOnSelectClick = () => {
    setSelected(!selected);
    const isBeerSelected = selectedBeers.includes(id);

    if (isBeerSelected) {
      const updatedSelectedBeer = selectedBeers.filter(
        recipeId => recipeId !== id
      );
      setSelectedBeers(updatedSelectedBeer);
    } else {
      const updatedSelectedBeer = [...selectedBeers, id];
      setSelectedBeers(updatedSelectedBeer);
    }
  };

  const handleDeleteOneBeer = () => {
    const updatedSelectedBeer = selectedBeers.filter(
      recipeId => recipeId !== id
    );
    setSelectedBeers(updatedSelectedBeer);
    deleteOneBeer(id);
    saveToTeletedBeersOneBeer(id);
  };

  return (
    <ItemStyled
      selected={selected}
      onContextMenu={handleBeerRightClick}
      className={selected ? 'active' : ''}
    >
      <RectStyled></RectStyled>
      <SelectStyled
        onClick={handleOnSelectClick}
        className={selected ? 'active' : ''}
      />
      {selected && <TrashStyled onClick={handleDeleteOneBeer} />}

      <AvaThumbStyled>
        <ImgStyled src={image_url} alt={name} onError={handleImageError} />
      </AvaThumbStyled>
      <InfoWrapperStyled>
        <NameStyled>{name}</NameStyled>
        <InfoTextBeer>
          <BoldText>tagline: </BoldText> {tagline}
        </InfoTextBeer>
        <InfoTextBeer>
          <BoldText>first brewed: </BoldText> {first_brewed}
        </InfoTextBeer>
      </InfoWrapperStyled>
      <LinkStyled to={`onebeer/${id}`}>
        {isAuth ? (<ReadMoreBtnStyled>Read more</ReadMoreBtnStyled>) : (<ReadMoreBtnStyled>NO!! Read more</ReadMoreBtnStyled>)}
      </LinkStyled>
      <Scrollbars style={{ width: 250, height: 80, zIndex: 20 }}>
        <InfoTextBeerDescr>{description}</InfoTextBeerDescr>
      </Scrollbars>
    </ItemStyled>
  );
};
