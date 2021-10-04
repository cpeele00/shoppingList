import { FC, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IconButton } from '../../../../common/components';
import { FormHeader, FormSubHeader } from '../../../../common/components/elements';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import * as styles from './styles';

type ItemDrawerPropsType = {
  isOpen: boolean;
  closeDrawer: Function;
};

export const ItemDrawer: FC<ItemDrawerPropsType> = ({ isOpen, closeDrawer }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemName: 'milk',
      itemDescription: 'go get sum milk',
      itemCount: 3,
    },
  });

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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'calc(100vh - 72px)',
          }}>
          {/* <form> */}
          <div
            css={{
              justifyContent: 'normal',
            }}>
            <FormHeader>Add an Item</FormHeader>
            <FormSubHeader>Add your new item below</FormSubHeader>

            <TextField
              id='outlined-basic'
              label='Item Name'
              variant='outlined'
              {...register('itemName')}
              css={{
                width: '100%',
              }}
            />

            <TextField
              id='outlined-multiline-static'
              label='Item Description'
              multiline
              rows={4}
              {...register('itemDescription')}
              css={{ width: '100%', marginTop: '18px' }}
            />

            <FormControl
              fullWidth
              css={{
                marginTop: '18px',
              }}>
              <InputLabel id='demo-simple-select-label'>How many?</InputLabel>
              <Controller
                name='itemCount'
                control={control}
                render={({ field }) => (
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='How many?'
                    {...field}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </div>
          <div
            css={{
              alignSelf: 'flex-end',
              justifySelf: 'flex-end',
            }}>
            <Button
              onClick={() => closeDrawer()}
              css={{
                marginRight: 15,
              }}>
              Cancel
            </Button>
            <Button variant='contained' onClick={handleSubmit(saveTask)}>
              Add task
            </Button>
          </div>
        </main>
      </div>
    </Drawer>
  );

  function saveTask(data) {
    console.log(data);
  }
};
