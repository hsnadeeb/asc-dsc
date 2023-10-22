import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/UI/Button/Demo/DemoList';
import Button from './components/UI/Button/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortOrder, setSortOrder] = useState('asc');

  const changeTitleHandler = useCallback(() => {
    if (listTitle === 'My List') {
      setListTitle('New Title');
    } else {
      setListTitle('My List');
    }
  }, [listTitle]);

  const changeOrderHandler = useCallback(() => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('asc');
    }
  }, [sortOrder]);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sortOrder={sortOrder} />
      <Button onClick={changeTitleHandler}>
        {listTitle === 'My List' ? 'Change List Title' : 'Change Back'}
      </Button>
      <Button onClick={changeOrderHandler}>
        {sortOrder === 'asc'
          ? 'Change to Descending Order'
          : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;
