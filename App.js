import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  return (
  <main>
    <section className='container'>
      <h1>{people.length} birthday</h1>
      <List people={people}/>
      <button onClick={() => setPeople([])}>clear all</button>
    </section>
  </main>
  );
}

export default App;
