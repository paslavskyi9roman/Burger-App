import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-on-react-c7d28.firebaseio.com/',
});

export default instance;
