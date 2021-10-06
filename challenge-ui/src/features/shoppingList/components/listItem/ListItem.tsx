import React, { ChangeEventHandler, FC, MouseEventHandler, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import * as styles from './styles';
import { IconButton } from '../../../../common/components';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

type ListItemPropsType = {
  id?: number;
  title: string;
  description: string;
  complete: boolean;
  onToggleComplete: Function;
  onEdit: Function;
  onDelete: Function;
};

export const ListItem: FC<ListItemPropsType> = ({
  id,
  title,
  description,
  complete,
  onToggleComplete,
  onEdit,
  onDelete,
}) => {
  const [isComplete, setIsComplete] = useState(complete);

  useEffect(() => {
    setIsComplete(complete);
  }, [complete]);

  return (
    <div css={styles.listItem(isComplete)}>
      <div css={styles.listItemLeftContainer}>
        <Checkbox
          aria-label='toggle item done'
          onChange={handleToggleComplete}
          defaultChecked={isComplete}
        />
        <div css={styles.listItemMeta}>
          <h3 css={styles.listItemTitle(isComplete)}>{title}</h3>
          <p css={styles.listItemDescription(isComplete)}>{description}</p>
        </div>
      </div>
      <div>
        <IconButton
          automationId={'editItem-id'}
          Icon={CreateOutlinedIcon}
          aria-label='Edit item'
          title='Edit item'
          isDisabled={!!isComplete}
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
    setIsComplete(!isComplete);

    if (onToggleComplete) {
      onToggleComplete();
    }
  }

  function handleOnEditClick() {
    if (isComplete) return;

    if (onEdit) {
      onEdit();
    }
  }

  function handleOnDeleteClick() {
    if (onDelete) {
      onDelete(id);
    }
  }
};
