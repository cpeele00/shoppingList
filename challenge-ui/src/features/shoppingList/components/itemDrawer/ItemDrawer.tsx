import React, { FC, useEffect, useState } from 'react';
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
import { FormButton } from '../../../../common/components';
import { useForm, Controller } from 'react-hook-form';
import * as styles from './styles';

type ItemDrawerPropsType = {
  item?: any;
  isOpen: boolean;
  isProcessing: boolean;
  isSuccess: boolean;
  closeDrawer: Function;
  onSave: Function;
};

export const ItemDrawer: FC<ItemDrawerPropsType> = ({
  item,
  isOpen,
  isProcessing,
  isSuccess,
  closeDrawer,
  onSave,
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  // I hate that prettier did this
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsEditMode(!!item);
    setValue('title', item?.title);
    setValue('description', item?.description);
    setValue('numberOfItems', item?.numberOfItems);
  }, [item]);

  useEffect(() => {
    if (!isProcessing && isSuccess) {
      resetForm();
    }
  }, [isProcessing, isSuccess]);

  return (
    <Drawer anchor={'right'} open={isOpen} onClose={handleDrawerClose}>
      <div css={styles.itemDrawer}>
        <header css={styles.drawerHeader}>
          <h1 css={styles.drawerHeaderTitle}>SHOPPING LIST</h1>
          <IconButton
            automationId={'itemdrawer-close-drawer-id'}
            Icon={LastPageIcon}
            aria-label='Close drawer'
            title='Close drawer'
            onClick={handleDrawerClose}
          />
        </header>

        <main css={styles.drawerContent}>
          <div css={styles.drawerContentLayout}>
            <FormHeader>{`${isEditMode ? 'Edit' : 'Add'} an Item`}</FormHeader>
            <FormSubHeader>
              {`${isEditMode ? 'Edit your item below' : 'Add your new item below'}`}
            </FormSubHeader>

            <TextField
              id='outlined-basic'
              label='Item Name'
              variant='outlined'
              {...register('title')}
              css={{
                width: '100%',
              }}
            />

            <TextField
              id='outlined-multiline-static'
              label='Item Description'
              multiline
              rows={4}
              {...register('description')}
              css={{ width: '100%', marginTop: '18px' }}
            />

            <FormControl
              fullWidth
              css={{
                marginTop: '18px',
              }}>
              <InputLabel id='demo-simple-select-label'>How many?</InputLabel>
              <Controller
                name='numberOfItems'
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
          <div css={styles.drawerButtonLayout}>
            <Button
              onClick={handleDrawerClose}
              css={{
                marginRight: 15,
              }}>
              Cancel
            </Button>
            <FormButton
              variant='contained'
              isProcessing={isProcessing}
              disabled={isProcessing}
              onClick={handleSubmit(saveTask)}>
              <>{`${isEditMode ? 'Save task' : 'Add task'}`}</>
            </FormButton>
          </div>
        </main>
      </div>
    </Drawer>
  );

  function saveTask(itemToSave) {
    if (onSave) {
      onSave({ ...itemToSave, id: item?.id });
    }
  }

  function handleDrawerClose() {
    resetForm();

    if (closeDrawer) {
      closeDrawer();
    }
  }

  function resetForm() {
    setIsEditMode(false);
    reset({
      title: '',
      description: '',
      numberOfItems: '',
    });
  }
};
