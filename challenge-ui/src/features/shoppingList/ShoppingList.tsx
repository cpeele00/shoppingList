import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { EmptyState } from '../../common/components';
import { List } from './components';
import Drawer from '@mui/material/Drawer';

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

      <Drawer anchor={'right'} open={isDrawerOpen} onClose={() => console.log('on close')}>
        <button onClick={() => setIsDrawerOpen(false)}>Close</button>
      </Drawer>
    </>
  );
};

export default ShoppingList;
