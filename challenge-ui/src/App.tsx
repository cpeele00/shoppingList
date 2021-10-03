import React, { useEffect } from 'react';
import { fetcher } from './common/async/fetcher';
import { helloQuery } from './common/queries/shoppingList.query';
import { ShoppingList } from './features/shoppingList/ShoppingList';
import './app.css';

function App() {
  useEffect(() => {
    (async function getData() {
      const data = await fetcher(helloQuery);

      console.log(data);
    })();
  }, []);

  return (
    <div className='app'>
      <ShoppingList />
    </div>
  );
}

export default App;
