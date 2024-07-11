import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BRAVERMAN;
    const serviceURL = process.env.REACT_APP_BRAVERMAN;
    
export const getCustomerProjec = (customerId: string) => {
    console.log(customerId);
    return axios.get(`${serviceURL}Project/GetById/667dec3df9361bd95f17db87`);

}

export const updateProject = (projectData: any) => {
    console.log("projectData");
    console.log(projectData);
    return axios.put(`${serviceURL}Project/Update`,projectData);
}

export const getProject = () => {
    return axios.get(`${serviceURL}Project`);
}
export const deleteProject = (projectId: string) => {
    return axios.delete(`${serviceURL}Project/Delete/${projectId}`);
}