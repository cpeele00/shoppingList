export const helloQuery = () => {
  const query = `
    query {
      hello
    }
  `;

  return {
    query: query,
    variables: {},
  };
};
