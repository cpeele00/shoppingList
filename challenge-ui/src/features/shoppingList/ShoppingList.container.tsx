import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ITEMS } from './state/shoppingList.state';
import { ShoppingList } from './ShoppingList';

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  return <ShoppingList items={items} />;
};

export default ShoppingListContainer;
