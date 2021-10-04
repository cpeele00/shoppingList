import Button from '@mui/material/Button';
import { EmptyState } from '../../common/components';

const ShoppingList = () => {
  return (
    <>
      <EmptyState>
        <p>Your shopping list is empty :(</p>
        <div>
          <Button variant='contained'>Add your first item</Button>
        </div>
      </EmptyState>
    </>
  );
};

export default ShoppingList;
