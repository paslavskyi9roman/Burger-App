import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://react-burger-e40bc.firebaseio.com/',
});

export default instanse;
