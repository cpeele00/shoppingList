import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types as itemsTypes } from './state/shoppingList.actions';
import { ShoppingList } from './ShoppingList';

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);

  useEffect(() => {
    dispatch({ type: itemsTypes.GET_ITEMS });
  }, [dispatch]);

  return <ShoppingList items={items} />;
};

export default ShoppingListContainer;
