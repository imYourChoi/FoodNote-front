import axios from 'axios';

export const add = (data) => {
  axios.post('/api/food', {
    restaurant: data.restaurant,
    food: data.food,
    date: data.date,
  });
};

export const getAll = async () => {
  console.log();
  // eslint-disable-next-line no-return-await
  return await axios.get('/api/food');
};
