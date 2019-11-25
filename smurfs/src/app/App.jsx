import React from 'react';
import './App.css';
// Features/Components
import SmurfList from '../features/getSmurfs/SmurfList';
import SmurfForm from '../components/SmurfForm';

const App = () => (
  <>
    <SmurfList />
    <SmurfForm />
  </>
);

export default App;
