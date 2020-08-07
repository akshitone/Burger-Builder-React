import axios from 'axios';

const urlInstance = axios.create({
    baseURL: 'https://burger-builder-react-9ddaa.firebaseio.com/'
});

export default urlInstance;