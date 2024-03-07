import React from 'react';
import Grilla from './components/Grilla';

function App() {
  const columns = ["id", "Name", "Position", "Office", "Age", "Start date", "Salary"];

  const data = [
    { "id": 1, "Name": "Tiger Nixon", "Position": "System Architect", "Office": "Edinburgh", "Age": 61, "Start date": "2011-04-25", "Salary": "$320,800" },
    { "id": 2, "Name": "Garrett Winters", "Position": "Accountant", "Office": "Tokyo", "Age": 63, "Start date": "2011-07-25", "Salary": "$170,750" },
    { "id": 3, "Name": "Garrett Winters3", "Position": "Accountant", "Office": "Tokyo", "Age": 63, "Start date": "2011-07-25", "Salary": "$170,750" }
  ];

  return (
    <div className="App">
      <h1>Grilla Reutilizable</h1>
      <Grilla columns={columns} data={data} size='100%' mostrarEditar={true} mostrarEliminar={true} />
      
    </div>
  );
}

export default App;
