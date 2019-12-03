import axios from 'axios';

export const getSmurfsData = async () => {
  const { data } = await axios.get('http://localhost:3333/smurfs');
  return data;
};

export const postSmurfsData = async ({ name, age, height }) => {
  const { status } = await axios.post('http://localhost:3333/smurfs', {
    name,
    age,
    height,
  });
  return status;
};

export const putSmurfData = async (smurf, id) => {
  const { status } = await axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
  return status;
};

export const removeSmurfData = async (id) => {
  const { status } = await axios.delete(`http://localhost:3333/smurfs/${id}`);
  return status;
};
