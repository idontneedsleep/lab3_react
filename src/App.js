import './App.css';
import React from "react";
import {List} from 'react-virtualized';
import {TableList} from "./components/tableList";
//import {dataPhotos} from 'https://jsonplaceholder.typicode.com/photos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TableList />
      </header>
    </div>
  );
}

export default App;
