import { fetcher } from '../async/fetcher';

export const addItemMutation = async item => {
  const mutation = `
    mutation AddItemMutation($addItemInput: ItemInput) {
      addItem(input: $addItemInput) {
        id,
        title,
        description,
        numberOfItems,
        isComplete
      }
    }
  `;

  const mutationData = {
    query: mutation,
    variables: {
      addItemInput: item,
    },
  };

  const result = await fetcher(mutationData);

  return result;
};

// const mutation = `
//   mutation AddItemMutation($addItemInput: ItemInput) {
//     addItem(input: $addItemInput) {
//       id
//     }
//   }
// `;
