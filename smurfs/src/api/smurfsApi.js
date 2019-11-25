import axios from 'axios';

export const getSmurfsData = async () => {
  const { data } = await axios.get('http://localhost:3333/smurfs');
  return data;
};

export const postSmurfsData = async ({ name, age, height }) => {
  const { response } = await axios.post('http://localhost:3333/smurfs', {
    name,
    age,
    height,
  });
  return response;
};

export const putSmurfData = async (smurf, id) => {
  const { response } = await axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
  return response;
};
