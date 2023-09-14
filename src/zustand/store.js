import { create } from 'zustand';
import { fetchBeers } from './api';
import { fetchOneBeer } from './api';
import { loadState, saveState } from './localStorage';
import { registerUser, logInUser, logOutUser } from './authApi';

const useStore = create(set => ({
  currentUser: loadState('beersUser'),
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  error: null,
  beers: [],
  oneBeer: {},
  selectedBeers: [],
  currentPage: 1,
  deletedBeers: loadState('deletedBeers') || [],
  saveToTeletedBeersOneBeer: id => {
    const deletedBeersArr = loadState('deletedBeers') || [];
    saveState('deletedBeers', [...deletedBeersArr, id]);
  },
  saveToDeletedBeersSomeBeers: ids => {
    const deletedBeersArr = loadState('deletedBeers') || [];
    const beerToLoad = [...deletedBeersArr, ...ids];
    saveState('deletedBeers', beerToLoad);
  },
  fetchBeersData: async currentPage => {
    try {
      const beers = await fetchBeers(currentPage);
      set({ beers });
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  },
  fetchOneBeerData: async id => {
    try {
      const oneBeer = await fetchOneBeer(id);
      set({ oneBeer: oneBeer[0] });
    } catch (error) {
      console.error('Error fetching oneBeer:', error);
    }
  },
  setSelectedBeers: beers => {
    set({ selectedBeers: beers });
  },
  setDeleteBeers: () =>
    set(state => {
      const updatedListBeers = state.beers.filter(
        oneBeer => !state.selectedBeers.includes(oneBeer.id)
      );
      const deletedBeersArr = [...state.deletedBeers, ...state.selectedBeers];
      return {
        beers: updatedListBeers,
        selectedBeers: [],
        deletedBeers: deletedBeersArr,
      };
    }),
  setDeleteOneBeer: id =>
    set(state => {
      const updatedListBeers = state.beers.filter(oneBeer => oneBeer.id !== id);
      const updatedListSelectBeers = state.selectedBeers.filter(
        oneID => oneID !== id
      );
      const deletedBeersArr = [...state.deletedBeers, id];
      return {
        beers: updatedListBeers,
        selectedBeers: updatedListSelectBeers,
        deletedBeers: deletedBeersArr,
      };
    }),
  setCurrentPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
  register: async newUserData => {
    try {
      const user = await registerUser(newUserData);
      if (user) {
        set({
          currentUser: user,
          userId: user.uid,
          login: user.displayName,
          isAuth: true,
          error: null,
        });
        saveState('beersUser', user);
      } else {set({error: 'Error register user'}); console.error('Error register user!'); }

    } catch (error) {
      console.error('Error register user:', error);
    }
  },
  logIn: async userData => {
    try {
      const user = await logInUser(userData);
      if (user) {
        set({
          currentUser: user,
          userId: user.uid,
          login: user.displayName,
          isAuth: true,
          error: null,
        });
      } else {set({error: 'Error logIn user'}); console.error('Error logIn user!'); }

    } catch (error) {
      console.error('Error logIn user:', error);
    }
  },
  logOut: async () => {
    logOutUser();
    set({ currentUser: null, userId: null, login: null, isAuth: false });
  },
}));

export default useStore;
