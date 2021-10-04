import React, { FC, MouseEventHandler } from 'react';
import * as styles from './styles';

type IconButtonPropsType = {
  automationId: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
  isDisabled?: boolean;
  Icon: any;
  css?: Object;
  [x: string]: any;
};

export const IconButton: FC<IconButtonPropsType> = ({
  automationId,
  onClick,
  isDisabled,
  Icon,
  css,
  ...rest
}) => {
  const iconStyles = { ...styles.iconButtonBase(isDisabled), ...css };

  return (
    <span id={automationId} {...rest} onClick={onClick}>
      <Icon css={iconStyles} />
    </span>
  );
};
