import axios from 'axios';

export const add = (data) => {
  axios.post('/api/food', {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => axios.get('/api/food');

export const deleteOne = (item) => axios.delete(`api/food/${item._id}`);

export const update = (id, data) =>
  axios.put(`api/food/${id}`, {
    restaurant: data.restaurant,
    food: data.food,
  });
