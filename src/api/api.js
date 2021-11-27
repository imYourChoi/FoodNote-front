import axios from 'axios';

export const add = (data) => {
  axios.post('/api', {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => {
  axios.get('/api');
};
