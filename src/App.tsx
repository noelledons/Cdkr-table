import React from 'react';
import Table from './components/Table/Table';
import peopleData from './random-people-data.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Table data={peopleData.ctRoot}/>
      
    </div>
  );
}

export default App;
