// Function to save data to localStorage
export const saveToLocalStorage = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };
  
  // Function to get data from localStorage
  export const getFromLocalStorage = (key, defaultValue = null) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return defaultValue;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error("Error getting data from localStorage:", error);
      return defaultValue;
    }
  };