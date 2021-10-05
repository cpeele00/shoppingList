import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { EmptyState } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';
import { GET_ITEMS } from './state/shoppingList.state';

const ShoppingList = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  return (
    <>
      {renderZeroState()}
      {renderShoppingListItems()}

      <ItemDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />
    </>
  );

  function renderZeroState() {
    if (items?.length === 0) {
      return (
        <EmptyState>
          <>
            <p>Your shopping list is empty :(</p>
            <div>
              <Button variant='contained'>Add your first item</Button>
            </div>
          </>
        </EmptyState>
      );
    }
  }

  function renderShoppingListItems() {
    if (items?.length > 0) {
      return (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Your Items</h2>
            <div>
              <Button size='medium' variant='contained' onClick={() => setIsDrawerOpen(true)}>
                Add Item
              </Button>
            </div>
          </div>
          <List>
            {items?.map(item => (
              <List.Item
                key={item.id}
                title={item.title}
                description={item.description}
                onToggleComplete={() => console.log('toggled')}
                onEdit={() => console.log('on edit clicked')}
                onDelete={() => console.log('on delete clicked')}
              />
            ))}
          </List>
        </>
      );
    }
  }
};

export default ShoppingList;
