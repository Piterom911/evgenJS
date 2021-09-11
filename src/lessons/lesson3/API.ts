import axios from 'axios';

const key = 'aa2c4975';
const configOMB = {
    baseURL: `http://www.omdbapi.com/`,
};
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=${key}&s=${title}&type=${type}`).then(res => {
            return res
        })
    }
};


export default API;
