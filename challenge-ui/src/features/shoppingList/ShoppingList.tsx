import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { EmptyState } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';

const ShoppingList = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <List.Item
          title={'Got Milk?'}
          description={'Get this dog some milk'}
          onToggleComplete={() => console.log('toggled')}
          onEdit={() => console.log('on edit clicked')}
          onDelete={() => console.log('on delete clicked')}
        />

        <List.Item
          title={'Got Milk?'}
          description={'Get this dog some milk'}
          onToggleComplete={() => console.log('toggled')}
          onEdit={() => console.log('on edit clicked')}
          onDelete={() => console.log('on delete clicked')}
        />
        {/* <EmptyState>
        <p>Your shopping list is empty :(</p>
          <div>
          <Button variant='contained'>Add your first item</Button>
          </div>
        </EmptyState> */}
      </List>

      <ItemDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default ShoppingList;
