import axios from 'axios';

export const add = (data) => {
  axios.post('/api/food', {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => axios.get('/api/food');

// eslint-disable-next-line no-underscore-dangle
export const deleteOne = (item) => axios.delete(`api/food/${item._id}`);
