import { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import LastPageIcon from '@mui/icons-material/LastPage';
import * as styles from './styles';
import { IconButton } from '../../../../common/components';
import { FormHeader, FormSubHeader } from '../../../../common/components/elements';

type ItemDrawerPropsType = {
  isOpen: boolean;
  closeDrawer: Function;
};

export const ItemDrawer: FC<ItemDrawerPropsType> = ({ isOpen, closeDrawer }) => {
  return (
    <Drawer anchor={'right'} open={isOpen} onClose={() => console.log('on close')}>
      <div css={styles.itemDrawer}>
        <header
          css={{
            background: '#fafafa',
            color: '#5C6269',
            padding: '20px 30px 21px 30px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h1
            css={{
              marginTop: 0,
              marginBottom: 0,
            }}>
            SHOPPING LIST
          </h1>
          <IconButton
            automationId={'itemdrawer-close-drawer-id'}
            Icon={LastPageIcon}
            aria-label='Close drawer'
            title='Close drawer'
            onClick={() => closeDrawer()}
          />
        </header>
        <main
          css={{
            padding: '30px',
          }}>
          <FormHeader>Add an Item</FormHeader>
          <FormSubHeader>Add your new item below</FormSubHeader>
        </main>
      </div>
    </Drawer>
  );
};
