import { fetcher } from '../async/fetcher';

export const getAllItemsQuery = async () => {
  const query = `
    query Query {
      items {
        id,
        title,
        description,
        numberOfItems
      }
    }
  `;

  const queryData = {
    query: query,
    variables: {},
  };

  const result = await fetcher(queryData);

  return result;
};
