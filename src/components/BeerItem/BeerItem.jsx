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
// import { useDispatch, useSelector } from 'react-redux';
// import { selectFavUsers } from '../../redux/user/selectors';
import 'react-toastify/dist/ReactToastify.css';
// import { getUserById, updateUserById } from 'redux/user/operations';
// import { addToFavArr, removeFromFavArr } from 'redux/user/slice';

export const BeerItem = ({
  id,
  name,
  image_url,
  tagline,
  first_brewed,
  description,
  abv,
  ibu,
  target_fg,
  target_og,
  ebc,
  srm,
  ph,
  attenuation_level,
  volume,
  boil_volume,
  method,
  ingredients,
  food_pairing,
  brewers_tips,
  contributed_by,
}) => {
  const selectedBeers = useStore(state => state.selectedBeers);
  const setSelectedBeers = useStore(state => state.setSelectedBeers);
  const [selected, setSelected] = useState(false);
  const deleteOneBeer = useStore(state => state.setDeleteOneBeer);
  const fetchOneBeer = useStore(state => state.fetchOneBeerData)

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
  };

  const handleReadMoreClick = () => {
    fetchOneBeer(id);
  }

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
      <LinkStyled to="onebeer" onClick={handleReadMoreClick}>
        <ReadMoreBtnStyled >
          Read more
        </ReadMoreBtnStyled>
      </LinkStyled>
      <Scrollbars style={{ width: 300, height: 80 }}>
        <InfoTextBeerDescr>{description}</InfoTextBeerDescr>
      </Scrollbars>
    </ItemStyled>
  );
};
