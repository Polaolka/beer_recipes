import { create } from 'zustand';
import { fetchBeers } from './api';
import { fetchOneBeer } from './api';

const useStore = create(set => ({
  beers: [],
  oneBeer: {},
  selectedBeers: [],
  currentPage: 1,
  fetchBeersData: async (currentPage) => {
    try {
      const beers = await fetchBeers(currentPage);
      set({ beers });
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  },
  fetchOneBeerData: async (id) => {
    try {
      const oneBeer = await fetchOneBeer(id);
      set( {oneBeer: oneBeer[0]} );
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
      return {
        beers: updatedListBeers,
        selectedBeers: [],
      };
    }),
  setDeleteOneBeer: (id) =>
    set(state => {
      const updatedListBeers = state.beers.filter(
        oneBeer => oneBeer.id !== id);
      const updatedListSelectBeers = state.selectedBeers.filter(
        oneID => oneID !== id);
      return {
        beers: updatedListBeers,
        selectedBeers: updatedListSelectBeers,
      };
    }),
    setCurrentPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
}));

export default useStore;
