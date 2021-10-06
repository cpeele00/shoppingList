import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './state/shoppingList.actions';
import { ShoppingList } from './ShoppingList';
import { Spinner } from '../../common/components';

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);
  const isLoading = useSelector((state: any) => state.ui.isLoading);
  const isProcessing = useSelector((state: any) => state.ui.isProcessing);
  const status = useSelector((state: any) => state.ui.status);

  useEffect(() => {
    dispatch(actions.getItems());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ShoppingList
          items={items}
          isProcessing={isProcessing}
          status={status}
          onSave={handleOnSave}
        />
      )}
    </>
  );

  function handleOnSave(item) {
    dispatch(actions.saveItem(item));
  }
};

export default ShoppingListContainer;
