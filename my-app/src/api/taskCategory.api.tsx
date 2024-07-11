import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BRAVERMAN;
const serviceURL = process.env.REACT_APP_BRAVERMAN;

export const getTaskCategories = async () => {
    try {
        const response = await axios.get(`${serviceURL}TaskCategory/getAll`);
        return [...response.data];
    } catch (error) {
        console.error('Error fetching task categories:', error);
        return [];
    }
};



export const addCategory = async (taskCategory: string) => {


    try {
        const response=await axios.post(`${serviceURL}TaskCategory/addTaskCategory`,taskCategory);
        return response.data; 
      } catch (error) {
        console.error('Error adding task category:', error);
        throw error;
      }
}