import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-on-react-fbd03.firebaseio.com/',
});

export default instance;
