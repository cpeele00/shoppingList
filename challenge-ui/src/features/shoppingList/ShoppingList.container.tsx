import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types as itemsTypes } from './state/shoppingList.actions';
import { ShoppingList } from './ShoppingList';
import { Spinner } from '../../common/components';

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);
  const isLoading = useSelector((state: any) => state.isLoading);

  useEffect(() => {
    dispatch({ type: itemsTypes.GET_ITEMS });
  }, [dispatch]);

  /* 
    I prefer this style, but prettier had other plans :-)
      {
        isLoading 
          ? <Spinner /> 
          : <ShoppingList items={items} />
      }
  */
  return <>{isLoading ? <Spinner /> : <ShoppingList items={items} />}</>;
};

export default ShoppingListContainer;
