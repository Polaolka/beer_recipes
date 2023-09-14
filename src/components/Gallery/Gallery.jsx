import React, { useEffect, useState } from 'react';
import { BeerItem } from '../BeerItem/BeerItem';
import {
  BeersListWrapper,
  LoadMoreBtn,
  Info,
} from './Gallery.styled';

import useStore from '../../zustand/store';
import { fetchBeers } from '../../zustand/api';

export const Gallery = () => {
  const page = useStore(state => state.currentPage);
  const { beers, selectedBeers, setSelectedBeers, saveToDeletedBeersSomeBeers, setDeleteBeers, deletedBeers } = useStore();
  const totalBeersToShow = 15;
  const beerWithoutDeleted = beers.filter((beer) => !deletedBeers.includes(beer.id));
  const [offset, setOffset] = useState(0);
  const [endOfList, setEndOfList] = useState(false);
  const [startOfList, setStartOfList] = useState(false);

  const beersToShow = beerWithoutDeleted.slice(offset, offset + totalBeersToShow);

  useEffect(() => {
    if (beers.length === 0) {
      const fetchBeersdata = async () => {
        try {
          const data = await fetchBeers(page);
          useStore.setState(state => ({
            beers: [...data],
          }));
          useStore.setState(state => ({ currentPage: state.currentPage + 1 }));
        } catch (error) {
          console.log(error);
        }
      };
      fetchBeersdata();
    }
    if (beers.length > 0 && beers.length <= 15) {
      const fetchBeersdata = async () => {
        try {
          const data = await fetchBeers(page);
          useStore.setState(state => ({
            beers: [...state.beers, ...data],
          }));
          useStore.setState(state => ({ currentPage: state.currentPage + 1 }));
        } catch (error) {
          console.log(error);
        }
      };
      fetchBeersdata();
    }
  }, [beers.length, page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
  
      if (scrollTop === 0 && !startOfList) {
        setStartOfList(true);
        setOffset(prevOffset => Math.max(0, prevOffset - 5));
      }
  
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.offsetHeight;
  
      if (scrollTop + windowHeight >= fullHeight && !endOfList) {
        setEndOfList(true);
        setOffset(prevOffset => prevOffset + 5);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (beers.length === 0 || (beers.length > 0 && beers.length <= offset + totalBeersToShow)) {
      const fetchBeersdata = async () => {
        try {
          const data = await fetchBeers(page);
          useStore.setState(state => ({
            beers: [...state.beers, ...data],
          }));
          useStore.setState(state => ({ currentPage: state.currentPage + 1 }));
        } catch (error) {
          console.log(error);
        }
      };
      fetchBeersdata();
    }
  }, [offset, beers.length, page]);

  async function handleDeleteBeers() {
    setDeleteBeers();
    saveToDeletedBeersSomeBeers(selectedBeers);
    setSelectedBeers([]);
  }

  return (
    <>
      {selectedBeers.length > 0 && (
        <LoadMoreBtn onClick={handleDeleteBeers}>Delete</LoadMoreBtn>
      )}
      {selectedBeers.length === 0 && (
        <Info>
          You can select one or more recipes with the right mouse button ⬇
        </Info>
      )}
      <BeersListWrapper>
        {beersToShow?.map(
          ({ id, name, image_url, description, first_brewed, tagline }) => (
            <BeerItem
              image_url={image_url}
              key={`${id}`}
              id={id}
              name={name}
              description={description}
              first_brewed={first_brewed}
              tagline={tagline}
              target="_blank"
              rel="noreferrer noopener"
            />
          )
        )}
      </BeersListWrapper>
    </>
  );
};
