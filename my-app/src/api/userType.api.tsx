import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BRAVERMAN;
const serviceURL = process.env.REACT_APP_BRAVERMAN;

export const getTypes = async () => {
    
    try {
      const response = await axios.get(`${serviceURL}UserType/getAll`);
      return [...response.data];
    } catch (error) {
      console.error('Error fetching users:', error);
      return []; 
    }
  };