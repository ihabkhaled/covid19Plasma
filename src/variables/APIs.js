import axios from 'axios';

// const baseURI = `${process.env.REACT_APP_API_URL}api/`;

const axiosInstance = axios.create({
    // baseURL: baseURI,
    timeout: 10000
});


export const API = {
    getData: () => axiosInstance.get('https://jsonplaceholder.typicode.com/todos/1')
};