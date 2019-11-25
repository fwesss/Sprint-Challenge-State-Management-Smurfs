// React
import React, { useEffect } from 'react';
// Redux
// import { useDispatch, useSelector } from 'react-redux';
// Actions
// import { getSmurfs } from './getSmurfsSlice';
// API
import { useDispatch, useSelector } from 'react-redux';
// import { getSmurfsData } from '../../api/smurfsApi';
import { getSmurfs } from './getSmurfsSlice';

const SmurfList = () => {
  const dispatch = useDispatch();

  const { fetchingSmurfs, smurfs: smurfsList, error } = useSelector((state) => state.getSmurfs);

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
    <>
      <div>
        {fetchingSmurfs ? <p>...loading</p> : (
          <>
            {smurfsList.map((smurfs) => (
              smurfs.map((smurf) => (
                <ul key={smurf}>
                  <li>{smurf.name}</li>
                  <li>{smurf.age}</li>
                  <li>{smurf.height}</li>
                  <li>{smurf.id}</li>
                </ul>
              ))
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SmurfList;
