import React, { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButton } from '../../../../common/components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import * as styles from './styles';
import { Item } from '../../../../common/types/item.type';

type ListItemPropsType = {
  id: string;
  item: Item;
  onToggleComplete: Function;
  onEdit: Function;
  onDelete: Function;
};

export const ListItem: FC<ListItemPropsType> = ({
  id,
  item,
  onToggleComplete,
  onEdit,
  onDelete,
}) => {
  return (
    <div css={styles.listItem(item.isComplete)}>
      <div css={styles.listItemLeftContainer}>
        <Checkbox
          id={`${id}-checkbox`}
          aria-label='toggle item done'
          onChange={handleToggleComplete}
          defaultChecked={item.isComplete}
        />
        <div css={styles.listItemMeta}>
          <h3 css={styles.listItemTitle(item.isComplete)}>{item.title}</h3>
          <p css={styles.listItemDescription(item.isComplete)}>{item.description}</p>
        </div>
      </div>
      <div css={styles.listItemActions}>
        <IconButton
          automationId={'editItem-id'}
          Icon={CreateOutlinedIcon}
          aria-label='Edit item'
          title='Edit item'
          isDisabled={!!item.isComplete}
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
        ...item,
        isComplete: !item.isComplete,
      });
    }
  }

  function handleOnEditClick() {
    if (item.isComplete) return;

    if (onEdit) {
      onEdit(item);
    }
  }

  function handleOnDeleteClick() {
    if (onDelete) {
      onDelete(item);
    }
  }
};
