import React from 'react';
import './App.css';
// Features/Components
import SmurfList from '../features/getSmurfs/SmurfList';
import SmurfAdder from '../features/addSmurfs/SmurfAdder';

const App = () => (
  <>
    <SmurfList />
    <SmurfAdder />
  </>
);

export default App;
