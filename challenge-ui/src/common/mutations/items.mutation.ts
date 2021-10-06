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

export const updateItemMutation = async item => {
  const mutation = `
    mutation UpdateItemMutation($updateItemId: ID!, $updateItemInput: UpdateItemInput) {
      updateItem(id: $updateItemId, input: $updateItemInput) {
        id
        title
        description
        numberOfItems
        isComplete
      }
    }
  `;

  const mutationData = {
    query: mutation,
    variables: {
      updateItemId: item.id,
      updateItemInput: item,
    },
  };

  const result = await fetcher(mutationData);

  return result;
};

export const deleteItemMutation = async id => {
  const mutation = `
    mutation Mutation($deleteItemId: ID!) {
     deleteItem(id: $deleteItemId) {
        id
      }
    }
  `;

  const mutationData = {
    query: mutation,
    variables: {
      deleteItemId: id,
    },
  };

  const result = await fetcher(mutationData);

  return result;
};
