export const saveState = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Error saving state to localStorage:', error);
    }
  };
  
  export const loadState = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state from localStorage error: ", error.message);
    }
  };