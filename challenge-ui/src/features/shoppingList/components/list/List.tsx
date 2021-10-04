import { ListItem } from '../listItem';
import * as styles from './styles';

const List = ({ children }) => {
  return <div css={styles.list}>{children}</div>;
};

List.Item = ListItem;

export default List;
