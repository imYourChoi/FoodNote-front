import axios from 'axios';

const backAddress = process.env.REACT_APP_API_URL;

console.log(backAddress);

export const add = (data) => {
  axios.post(`${backAddress}/api/food`, {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => axios.get(`${backAddress}/api/food`);

export const deleteOne = (item) =>
  axios.delete(`${backAddress}/api/food/${item._id}`);

export const update = (id, data) =>
  axios.put(`${backAddress}/api/food/${id}`, {
    restaurant: data.restaurant,
    food: data.food,
  });
