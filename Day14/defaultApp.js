\import React from 'react';
import SearchFilter from './SearchFilter';

const App = () => {
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Pear' },
    { id: 5, name: 'Grapes' },
  ];

  return (
    <div>
      <h1>Search Filter Example</h1>
      <SearchFilter data={data} />
    </div>
  );
};

export default App;