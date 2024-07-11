import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BRAVERMAN;
const serviceURL = process.env.REACT_APP_BRAVERMAN;

export const getStatusProject = () => {
    return axios.get(`${serviceURL}LookUpBase/GetAllLookUpBase?e=0`);

}
export const filterByStatus = (statusKey:string) => {
    return axios.get(`${serviceURL}Project/GetByStatus/${statusKey}`);
}