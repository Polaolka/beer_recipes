import React, { useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import {
  BeersRecipeBox,
  ImgStyled,
  ItemStyled,
  RectStyled,
  AvaThumbStyled,
  NameStyled,
  InfoTextBeer,
  LinkStyled,
  InfoWrapperStyled,
  BoldText,
  InfoTextBeerDescr,
  Subtitle,
  RecipeWrapperStyled,
} from './BeerEl.styled';
import { Scrollbars } from 'rc-scrollbars';
import useStore from '../../zustand/store';

export const BeerEl = (id, location) => {
  const fetchOneBeerData = useStore(state => state.fetchOneBeerData);
  const oneBeer = useStore(state => state.oneBeer);
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');
  const handleBackClick = () => {
    useStore.setState(state => ({oneBeer: {}}));
  };
  useEffect(() => {
    fetchOneBeerData(id);
  }, [fetchOneBeerData, id]);

  const {
    name,
    image_url,
    description,
    tagline,
    first_brewed,
    ingredients,
    food_pairing,
    brewers_tips,
    contributed_by,
  } = oneBeer;
  const handleImageError = e => {
    e.target.src =
      'https://res.cloudinary.com/dj5smkin6/image/upload/v1689348096/BeerLogo_gych6g.jpg';
  };

  return (
    <BeersRecipeBox>
      <LinkStyled to={backLinkLocationRef.current} onClick={handleBackClick}>
        &#8592; Go back
      </LinkStyled>
      <ItemStyled>
        <RectStyled></RectStyled>
        <AvaThumbStyled>
          <ImgStyled src={image_url} alt={name} onError={handleImageError} />
        </AvaThumbStyled>
        <InfoWrapperStyled>
          <NameStyled>{name}</NameStyled>
          <BoldText>{tagline}</BoldText>
          <InfoTextBeer>
            <BoldText>first brewed: </BoldText> {first_brewed}
          </InfoTextBeer>
          <Scrollbars style={{ width: '100%', height: 80 }}>
            <InfoTextBeerDescr>{description}</InfoTextBeerDescr>
          </Scrollbars>
        </InfoWrapperStyled>
        <RecipeWrapperStyled>
          <Subtitle>Ingredients :</Subtitle>
          <div>
            <h4>Malt</h4>
            <table>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {ingredients?.malt?.map(malt => (
                  <tr key={nanoid()}>
                    <td>{malt.name}</td>
                    <td>
                      {malt.amount.value}
                      {malt.amount.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h4>Hops</h4>
            <table>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Amount</th>
                  <th>Add</th>
                  <th>Attribute</th>
                </tr>
              </thead>
              <tbody>
                {ingredients?.hops?.map(hops => (
                  <tr key={nanoid()}>
                    <td>{hops.name}</td>
                    <td>
                      {hops.amount.value}
                      {hops.amount.unit}
                    </td>
                    <td>{hops.add}</td>
                    <td>{hops.attribute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>food_pairing:</h4>
            <table>
              <tbody>
                {food_pairing?.map(food => (
                  <tr key={nanoid()}>
                    <td>{food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RecipeWrapperStyled>
        <InfoTextBeer>
          <BoldText>Brewers tips: </BoldText> {brewers_tips}
        </InfoTextBeer>
        <InfoTextBeer>
          <BoldText>Contributed by: </BoldText> {contributed_by}
        </InfoTextBeer>
      </ItemStyled>
    </BeersRecipeBox>
  );
};
