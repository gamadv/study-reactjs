import axios from 'axios';

const api = axios.create({
    baseURL:'https://study-api-node.herokuapp.com/api'
});



export default api;