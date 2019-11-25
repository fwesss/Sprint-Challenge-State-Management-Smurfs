import axios from 'axios';

export const getSmurfsData = async () => {
  const { data } = await axios.get('http://localhost:3333/smurfs');
  return data;
};
