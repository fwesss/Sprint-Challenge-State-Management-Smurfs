// React
import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// UI
import { Paper } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Actions
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { getSmurfs } from './getSmurfsSlice';
import { markSmurfForEditing } from '../editSmurfs/editSmurfsSlice';
import { deleteSmurf } from '../deleteSmurf/deleteSmurfSlice';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  card: {
    minWidth: 275,
    margin: 15,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  listItem: {
    fontSize: 16,
  },
});

const SmurfList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { fetchingSmurfs, smurfs, error } = useSelector((state) => state.getSmurfs);
  const putSuccess = useSelector((state) => state.pushSmurfs.success);
  const postSuccess = useSelector((state) => state.editSmurf.success);
  const deleteSuccess = useSelector((state) => state.deleteSmurf.success);

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSmurfs());
  }, [deleteSuccess, dispatch, postSuccess, putSuccess]);

  const handleEdit = (id) => {
    const smurfToEdit = smurfs.find((smurf) => smurf.id === id);
    dispatch(markSmurfForEditing(smurfToEdit));
  };

  const handleDelete = (id) => {
    dispatch(deleteSmurf(id));
  };

  if (error) {
    return (
      <div>
        <p>There seems to be a problem</p>
      </div>
    );
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      {fetchingSmurfs ? <p>...loading</p> : (
        <>
          {smurfs.map((smurf) => (
            <Card key={smurf.id} className={classes.card}>
              <CardContent>
                <Typography variant="h2" className={classes.title}>{smurf.name}</Typography>
                <Typography variant="h3" className={classes.listItem}>{`Age: ${smurf.age}`}</Typography>
                <Typography variant="h3" className={classes.listItem}>{`Height: ${smurf.height}`}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleEdit(smurf.id)}>Edit</Button>
                <Button onClick={() => handleDelete(smurf.id)}>Delete</Button>
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </Paper>
  );
};

export default SmurfList;
