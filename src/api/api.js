import axios from 'axios';

export const add = (data) => {
  axios.post('/api/food', {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => axios.get('/api/food');
