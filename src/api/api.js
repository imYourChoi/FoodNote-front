import axios from 'axios';

const backAddress = process.env.REACT_APP_API_URL;

console.log(backAddress);

export const add = (data) => {
  axios.post(`${backAddress}/food`, {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = () => axios.get(`${backAddress}/food`);

export const deleteOne = (item) =>
  axios.delete(`${backAddress}/food/${item._id}`);

export const update = (id, data) =>
  axios.put(`${backAddress}/food/${id}`, {
    restaurant: data.restaurant,
    food: data.food,
  });
