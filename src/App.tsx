import React from 'react';
import Table from './components/Table/Table';
import peopleData from './random-people-data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Conduktor Random People Data</h1>
      <Table data={peopleData.ctRoot}/>
      
    </div>
  );
}

export default App;
