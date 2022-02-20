import axios from 'axios';

const KEY = '20407857-5cbc70afd557f45317642044e';
const URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

const fetchImages = () => {
  return axios.get(`?key=${KEY}&q=cats`);
};

export default fetchImages;
