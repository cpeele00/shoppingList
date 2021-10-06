import React, { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButton } from '../../../../common/components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import * as styles from './styles';

type ListItemPropsType = {
  id?: number;
  title: string;
  description: string;
  complete: boolean;
  numberOfItems: number;
  isProcessing: boolean;
  onToggleComplete: Function;
  onEdit: Function;
  onDelete: Function;
};

export const ListItem: FC<ListItemPropsType> = ({
  id,
  title,
  description,
  complete,
  numberOfItems,
  isProcessing,
  onToggleComplete,
  onEdit,
  onDelete,
}) => {
  return (
    <div css={styles.listItem(complete)}>
      <div css={styles.listItemLeftContainer}>
        {isProcessing ? (
          <CircularProgress
            size={20}
            css={{
              color: '#1976d2',
              marginRight: '12px',
              marginLeft: '10px',
            }}
          />
        ) : (
          <Checkbox
            aria-label='toggle item done'
            onChange={handleToggleComplete}
            defaultChecked={complete}
          />
        )}

        <div css={styles.listItemMeta}>
          <h3 css={styles.listItemTitle(complete)}>{title}</h3>
          <p css={styles.listItemDescription(complete)}>{description}</p>
        </div>
      </div>
      <div>
        <IconButton
          automationId={'editItem-id'}
          Icon={CreateOutlinedIcon}
          aria-label='Edit item'
          title='Edit item'
          isDisabled={!!complete}
          css={{ marginRight: 20 }}
          onClick={handleOnEditClick}
        />
        <IconButton
          automationId={'deleteItem-id'}
          Icon={DeleteOutlinedIcon}
          aria-label='Delete item'
          title='Delete item'
          onClick={handleOnDeleteClick}
        />
      </div>
    </div>
  );

  function handleToggleComplete() {
    if (onToggleComplete) {
      onToggleComplete({
        id,
        title,
        description,
        isComplete: !complete,
        numberOfItems,
      });
    }
  }

  function handleOnEditClick() {
    if (complete) return;

    if (onEdit) {
      onEdit({
        id,
        title,
        description,
        complete,
        numberOfItems,
      });
    }
  }

  function handleOnDeleteClick() {
    if (onDelete) {
      onDelete(id);
    }
  }
};
