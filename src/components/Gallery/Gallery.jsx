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
  const selectedBeers = useStore(state => state.selectedBeers);
  const setSelectedBeers = useStore(state => state.setSelectedBeers);
  const deleteBeers = useStore(state => state.setDeleteBeers);
  const { beers } = useStore();
  const totalBeersToShow = 15;

  const [offset, setOffset] = useState(0);
  const [endOfList, setEndOfList] = useState(false);

  const beersToShow = beers.slice(offset, offset + totalBeersToShow);

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
  });

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
    deleteBeers();
    setSelectedBeers([]);
  }

  return (
    <>
      {selectedBeers.length > 0 && (
        <LoadMoreBtn onClick={handleDeleteBeers}>Видалити</LoadMoreBtn>
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
