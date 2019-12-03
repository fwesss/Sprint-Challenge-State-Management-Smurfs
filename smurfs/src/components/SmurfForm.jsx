import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { postSmurf } from '../features/addSmurfs/postSmurfsSlice';
import { putSmurf } from '../features/editSmurfs/editSmurfsSlice';

const SmurfForm = () => {
  const [smurfInfo, setSmurfInfo] = useState({
    name: '',
    age: 0,
    height: 0,
  });
  const { smurfToEdit } = useSelector((state) => state.editSmurf);
  const { smurfs } = useSelector((state) => state.getSmurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (smurfToEdit.id !== null) {
      setSmurfInfo(smurfToEdit);
    }
  }, [smurfToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const processedInfo = {
      name: smurfInfo.name,
      age: Number(smurfInfo.age),
      height: `${smurfInfo.height}cm`,
    };

    if (smurfs.find((smurf) => smurf.id === smurfInfo.id)) {
      dispatch(putSmurf(smurfInfo, smurfInfo.id));
    } else {
      dispatch(postSmurf(processedInfo));
    }

    setSmurfInfo({
      name: '',
      age: 0,
      height: 0,
    });
  };

  const handleChange = (event) => {
    setSmurfInfo({ ...smurfInfo, [event.target.name]: event.target.value });
  };

  return (
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
        label="Height in cm"
        variant="filled"
        onChange={handleChange}
        name="height"
        value={parseInt(smurfInfo.height, 10)}
        type="number"
        fullWidth
        required
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export default SmurfForm;
