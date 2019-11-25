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
import { getSmurfs } from './getSmurfsSlice';

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

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

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
            </Card>
          ))}
        </>
      )}
    </Paper>
  );
};

export default SmurfList;
