import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { postSmurf } from './postSmurfsSlice';

const SmurfAdder = () => {
  const [smurfInfo, setSmurfInfo] = useState({
    name: '',
    age: '',
    height: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const processedInfo = {
      name: smurfInfo.name,
      age: Number(smurfInfo.age),
      height: `${smurfInfo.height}cm`,
    };

    console.log(processedInfo);
    dispatch(postSmurf(processedInfo));
  };

  const handleChange = (event) => {
    setSmurfInfo({ ...smurfInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="filled"
          onChange={handleChange}
          name="name"
          value={smurfInfo.name}
          fullWidth
          required
        />
        <TextField
          label="Age"
          variant="filled"
          onChange={handleChange}
          name="age"
          value={smurfInfo.age}
          type="number"
          fullWidth
          required
        />
        <TextField
          label="Height"
          variant="filled"
          onChange={handleChange}
          name="height"
          value={smurfInfo.height}
          type="number"
          fullWidth
          required
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </>
  );
};

export default SmurfAdder;
