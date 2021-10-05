import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { EmptyState } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';

type ShoppingListPropTypes = {
  items: any[];
};

export const ShoppingList: FC<ShoppingListPropTypes> = ({ items }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
