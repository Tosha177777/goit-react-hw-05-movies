import axios from 'axios';
const API_KEY = '08e108d01762394f2ae50fa4fb841dfd';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

const fetchMovies = async url => {
  const { data } = await instance.get(url);
  return data;
};

export default fetchMovies;
